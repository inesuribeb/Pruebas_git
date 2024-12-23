

function getAverageRGB(imgEl) {
    if (!imgEl || !imgEl.complete || !imgEl.naturalWidth) {
        return null;
    }

    const blockSize = 5;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext && canvas.getContext('2d');

    if (!context) {
        return null;
    }

    const height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    const width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    if (!width || !height) {
        return null;
    }

    try {
        context.drawImage(imgEl, 0, 0);
        const data = context.getImageData(0, 0, width, height).data;
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    } catch (error) {
        console.error('Error getting image data:', error);
        return null;
    }
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