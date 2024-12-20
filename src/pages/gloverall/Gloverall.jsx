import Structure from "../../components/structure/structure";
import './Gloverall.css'

function Gloverall (){
    const gloverallCarousel = {
        images: [
            {
                url: "https://i.ibb.co/VwSFHHr/Captura-de-pantalla-2024-11-15-a-las-20-57-54-copia.png",
                description: "Photography for the Gloverall 2024 Collection. Shot in London, UK with Sarah Smith and John Doe. Photos by Mark Johnson."
            },
            {
                url: "https://i.ibb.co/Yt7Df6K/Captura-de-pantalla-2024-11-15-a-las-20-48-42.png",
                description: "Behind the scenes of Gloverall Spring Collection. Editorial photography by Mark Johnson.",
            },
            {
                url: "https://i.ibb.co/1GhqcwH/Captura-de-pantalla-2024-11-15-a-las-20-54-21.png",
                description: "Gloverall Heritage Collection showcase. Location: Scottish Highlands."
            },
            {
                url: "https://i.ibb.co/b36XF3V/Captura-de-pantalla-2024-11-15-a-las-20-49-10.png",
                description: "Monty Duffle Coat in Arctic White. Styled by Kevis Manzi. Cooler days."
            },
            {
                url: "https://i.ibb.co/FWhZYqS/Captura-de-pantalla-2024-11-15-a-las-20-50-06.png",
                description: "Monty Duffle Coat in Arctic White. Styled by Kevis Manzi. Cooler days."
            },
            {
                url: "https://i.ibb.co/7WXW4DD/Captura-de-pantalla-2024-11-15-a-las-20-51-06.png",
                description: "Monty Duffle Coat in Arctic White. Styled by Kevis Manzi. Cooler days."
            },
            {
                url: "https://i.ibb.co/7WXW4DD/Captura-de-pantalla-2024-11-15-a-las-20-51-06.png",
                description: "Monty Duffle Coat in Arctic White. Styled by Kevis Manzi. Cooler days."
            },
            {
                url: "https://i.ibb.co/9v7ySrk/Captura-de-pantalla-2024-11-15-a-las-20-49-37.png",
                description: "Monty Duffle Coat in Arctic White. Styled by Kevis Manzi. Cooler days."
            },
            {
                url: "https://i.ibb.co/qD5R2F2/Captura-de-pantalla-2024-11-15-a-las-20-53-43.png",
                description: "Monty Duffle Coat in Arctic White. Styled by Kevis Manzi. Cooler days."
            },
            {
                url: "https://i.ibb.co/xfXQzGq/Captura-de-pantalla-2024-11-15-a-las-20-52-21.png",
                description: "Monty Duffle Coat in Arctic White. Styled by Kevis Manzi. Cooler days."
            },
        ]
    };

    const gloverallInfo = {
        logo: "https://www.itochu.co.jp/en/news/press/2017/__icsFiles/afieldfile/2017/11/24/news_171116_1.png",
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
        history: "Founded in 1951, Gloverall has been synonymous with quality British outerwear for over 70 years. The brand began by importing surplus military duffle coats after World War II, eventually developing their own signature styles that would come to define British fashion. \n\nToday, Gloverall continues to manufacture their iconic duffle coats in England, combining traditional craftsmanship with contemporary design. \n\nEach piece reflects the brand's commitment to quality materials and timeless style, maintaining their position as a leader in British heritage fashion."
    };

    return (
        <>
                <Structure 
                    carouselContent={gloverallCarousel}
                    infoContent={gloverallInfo}
                    pageClass={"gloverall-page"}
                /> 
        </>
    );
}

export default Gloverall;