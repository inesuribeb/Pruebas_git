import Structure from "../../components/structure/structure";
import './Sanders.css'

function Sanders (){
    const sandersCarousel = {
        images: [
            {
                url: "https://i.ibb.co/9rKrKNm/firstsanders-TRUE.png",
                description: "Showcase of Sanders' classic brogues in a refined studio setting. Photographed by Edward Clarke.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/FJGqXkt/miamor.png",
                description: "Behind the scenes: Sanders' shoemaking process at their factory in Rushden, England.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/qy8JDk6/sanders.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/0VYFrf5/5.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/BjpzNYh/1.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/2sYkWTX/sandersmodel.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/gJLRbbL/3.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/Zgwh54r/2.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/HV4RkZV/8.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/fd0Dk12/7.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            
            {
                url: "https://i.ibb.co/vx7gBt1/new2.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/VJ20N6F/new3.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/3k0MK3J/new.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
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
                url: "https://www.instagram.com/sandersshoes/"
            },
            {
                name: "Website",
                url: "https://www.sanders-uk.com/"
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