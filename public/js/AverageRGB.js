export function getAverageRGB(imageElement) {
    if (!imageElement || !imageElement.complete || imageElement.naturalWidth === 0) {
        console.error("Image element is not valid or not fully loaded.");
        return { r: 0, g: 0, b: 0 }; // Devuelve un color predeterminado
    }

    const canvas = document.createElement("canvas");
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;

    const context = canvas.getContext("2d");
    context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let r = 0, g = 0, b = 0;

    for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
    }

    const pixelCount = data.length / 4;
    return {
        r: Math.floor(r / pixelCount),
        g: Math.floor(g / pixelCount),
        b: Math.floor(b / pixelCount),
    };
}

export function getLuminance({ r, g, b }) {
    const a = [r, g, b].map(v => v / 255);
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]; 
}

export function updateTextColor(imageElement, description, counter, nextButton) {
    const averageRGB = getAverageRGB(imageElement);
    const luminance = getLuminance(averageRGB);

    const textColor = luminance < 0.5 ? 'white' : 'black';

    if (description) description.style.color = textColor;
    if (counter) counter.style.color = textColor;
    if (nextButton) nextButton.style.color = textColor;
}

export async function handleImageLoad(imageElement) {
    if (!imageElement) {
        console.error("Image element is undefined or null.");
        return;
    }

    if (imageElement.complete && imageElement.naturalWidth > 0) {
        updateTextColor(
            imageElement,
            document.querySelector(".carousel-info p"),
            document.querySelector(".carousel-counter"),
            document.querySelector(".carousel-next-button")
        );
    } else {
        console.error("Image is not fully loaded.");
    }
}