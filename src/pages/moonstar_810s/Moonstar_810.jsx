import Structure from "../../components/structure/structure";

function Moonstar810 (){
    const moonstar810Carousel = {
        images: [
            {
                url: "/images/moonstar810/collection1.jpg",
                description: "Editorial shoot featuring Moonstar 810 sneakers in an urban landscape. Location: Tokyo, Japan."
            },
            {
                url: "/images/moonstar810/collection2.jpg",
                description: "Showcase of the Moonstar 810 collection blending heritage and modern design. Photographed by Kenji Tanaka."
            },
            {
                url: "/images/moonstar810/collection3.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            }
        ]
    };
    
    const moonstar810Info = {
        logo: "/images/moonstar810/logo.png",
        title: "Moonstar 810",
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
        history: "Founded in 1873, Moonstar is a heritage Japanese footwear brand rooted in the traditions of Kurume, a city renowned for its fine craftsmanship. The Moonstar 810s line represents the perfect fusion of the brand’s century-old expertise and modern, functional design. Known for their vulcanized rubber soles and meticulous attention to detail, Moonstar 810 shoes are versatile, durable, and stylish. Every pair is made with precision in the Kurume factory, ensuring superior quality and comfort. Moonstar continues to innovate while honoring its rich legacy, making it a favorite among footwear enthusiasts worldwide."
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