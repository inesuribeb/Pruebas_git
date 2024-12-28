import Structure from "../../components/structure/structure";
import './Moonstar_810.css'

function Moonstar810 (){
    const moonstar810Carousel = {
        images: [
            {
                url: "https://i.ibb.co/StXGfmm/1web.jpg",
                description: "Editorial shoot featuring Moonstar 810 sneakers in an urban landscape. Location: Tokyo, Japan."
            },
            {
                url: "https://i.ibb.co/4Z29LGH/jt.png",
                description: "Showcase of the Moonstar 810 collection blending heritage and modern design. Photographed by Kenji Tanaka."
            },
            {
                url: "https://i.ibb.co/MPPkHJd/sdv.png",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/LrBNHzc/810studio.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/x5PNh4x/studenaero-bluegray-1.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/MVhhwL9/change2.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/R3cdp2C/vfs.png",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/S7VqK8T/new4.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/VJdwxwW/change.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/fXCcsTt/Captura-de-pantalla-2024-11-15-a-las-21-51-06.png",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/P50W7VP/new8.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/df7Cn8v/new7.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures.",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/R7zn9Cb/new6.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures.",
                textColor: "dark"
            },
        ]
    };
    
    const moonstar810Info = {
        logo: "https://and-flow.jp/wp-content/uploads/2024/08/13196_sub1.png",
        // logo: "https://www.urban-research.tw/special/201211-moonstar/images/logo-810s.svg",
        title: "Moonstar 810s",
        origin: "Kurume, Japan",
        socials: [
            {
                name: "Instagram",
                url: "https://instagram.com/moonstar810"
            },
            {
                name: "Facebook",
                url: "https://facebook.com/moonstar810"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/moonstar810"
            }
        ],
        history: "Founded in 1873, Moonstar is a heritage Japanese footwear brand rooted in the traditions of Kurume, a city renowned for its fine craftsmanship. \n\nThe Moonstar 810s line represents the perfect fusion of the brand’s century-old expertise and modern, functional design. Known for their vulcanized rubber soles and meticulous attention to detail, Moonstar 810 shoes are versatile, durable, and stylish. \n\nEvery pair is made with precision in the Kurume factory, ensuring superior quality and comfort. Moonstar continues to innovate while honoring its rich legacy, making it a favorite among footwear enthusiasts worldwide."
    };
    
    return (
        <>
                <Structure 
                    carouselContent={moonstar810Carousel}
                    infoContent={moonstar810Info}
                    pageClass={"moonstar810-page"}

                /> 
        </>
    );
}

export default Moonstar810;