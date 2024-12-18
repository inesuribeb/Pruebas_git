import Structure from "../../components/structure/structure";

function Gloverall (){
    const gloverallCarousel = {
        images: [
            {
                url: "/images/gloverall/collection1.jpg",
                description: "Photography for the Gloverall 2024 Collection. Shot in London, UK with Sarah Smith and John Doe. Photos by Mark Johnson."
            },
            {
                url: "/images/gloverall/collection2.jpg",
                description: "Behind the scenes of Gloverall Spring Collection. Editorial photography by Mark Johnson."
            },
            {
                url: "/images/gloverall/collection3.jpg",
                description: "Gloverall Heritage Collection showcase. Location: Scottish Highlands."
            }
        ]
    };

    const gloverallInfo = {
        logo: "/images/gloverall/logo.png",
        title: "Gloverall",
        origin: "London, United Kingdom",
        socials: [
            {
                name: "Instagram",
                url: "https://instagram.com/gloverall"
            },
            {
                name: "Facebook",
                url: "https://facebook.com/gloverall"
            },
            {
                name: "Pinterest",
                url: "https://pinterest.com/gloverall"
            }
        ],
        history: "Founded in 1951, Gloverall has been synonymous with quality British outerwear for over 70 years. The brand began by importing surplus military duffle coats after World War II, eventually developing their own signature styles that would come to define British fashion. Today, Gloverall continues to manufacture their iconic duffle coats in England, combining traditional craftsmanship with contemporary design. Each piece reflects the brand's commitment to quality materials and timeless style, maintaining their position as a leader in British heritage fashion."
    };

    return (
        <>
            <main className="gloverall-page">
                <Structure 
                    carouselContent={gloverallCarousel}
                    infoContent={gloverallInfo}
                /> 
            </main>
        </>
    );
}

export default Gloverall;