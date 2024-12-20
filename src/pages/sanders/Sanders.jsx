import Structure from "../../components/structure/structure";
import './Sanders.css'

function Sanders (){
    const sandersCarousel = {
        images: [
            {
                url: "https://i.ibb.co/9rKrKNm/firstsanders-TRUE.png",
                description: "Showcase of Sanders' classic brogues in a refined studio setting. Photographed by Edward Clarke."
            },
            {
                url: "https://i.ibb.co/dWbJ9mn/Captura-de-pantalla-2024-11-15-a-las-20-18-52.png",
                description: "Behind the scenes: Sanders' shoemaking process at their factory in Rushden, England."
            },
            {
                url: "https://i.ibb.co/HpjWSjh/Captura-de-pantalla-2024-11-15-a-las-20-18-04.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            }
        ]
    };
    
    const sandersInfo = {
        logo: "https://sanders.jp/cdn/shop/files/logo_wh_500x.png?v=1636988252",
        title: "Sanders",
        origin: "Rushden, United Kingdom",
        socials: [
            {
                name: "Instagram",
                url: "https://instagram.com/sanders_shoes"
            },
            {
                name: "Facebook",
                url: "https://facebook.com/sanders_shoes"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/sanders_shoes"
            }
        ],
        history: "Founded in 1873, Sanders & Sanders Ltd. is one of the oldest and most esteemed shoemakers in England. Based in Rushden, Northamptonshire, the heart of British shoemaking, Sanders has a long-standing tradition of producing high-quality, handcrafted footwear. \n\nKnown for their impeccable craftsmanship, durability, and timeless designs, Sanders shoes have been worn by style icons and professionals alike. From military boots to elegant brogues, every pair embodies the brand's commitment to excellence and heritage. \n\nToday, Sanders continues to merge traditional shoemaking techniques with contemporary style, ensuring their place as a staple in modern wardrobes."
    };
    
    return (
        <>
                <Structure 
                    carouselContent={sandersCarousel}
                    infoContent={sandersInfo}
                    pageClass={"sanders-page"}
                /> 
        </>
    );
}

export default Sanders;