import Logo from '../../components/phone/logo/Logo'
import Carrusel from '../../components/phone/carrusel/Carrusel'
import './GloverallPhone.css'


function GloverallPhone(){
    const gloverallCarrusel = {
        images: [
            {
                url: "https://i.ibb.co/VwSFHHr/Captura-de-pantalla-2024-11-15-a-las-20-57-54-copia.png",
                description: "Photography for the Gloverall 2024 Collection. Shot in London, UK with Sarah Smith and John Doe. Photos by Mark Johnson.",
                textColor: "dark" 
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
                url: "https://i.ibb.co/1dZspTW/Captura-de-Pantalla-2024-12-19-a-las-21-30-00.png",
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
           
        ]
    };
    return(
        <div>
            <Logo url="https://www.itochu.co.jp/en/news/press/2017/__icsFiles/afieldfile/2017/11/24/news_171116_1.png" />
            <Carrusel content={gloverallCarrusel} />
        </div>

    )
}

export default GloverallPhone;