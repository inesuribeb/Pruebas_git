import Logo from '../../components/phone/logo/Logo'
import Carrusel from '../../components/phone/carrusel/Carrusel'
import History from '../../components/phone/textPhone/History';
import Origin from '../../components/phone/textPhone/Origin';
import Socials from '../../components/phone/textPhone/Socials';
import BestSellers from '../../components/phone/bestSellers/BestSellers';
import './GloverallPhone.css'


function GloverallPhone() {
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

    const gloverallBs = {
        images: [
            {
                url: 'https://i.ibb.co/qmXwRwX/Morris-Duffle-Coat-Navy-Dress-Gordon-1285x1800.webp',
                description: 'Morris Duffle Coat Navy Dress Gordon'
            },
            {
                url: 'https://i.ibb.co/BLFPXTT/MC5750-MONTY-CAMEL-FRONT-1285x1800.webp',
                description: 'Original Monty Duffle Coat Camel'
            },
            {
                url: 'https://i.ibb.co/T4Zcgsh/GLOVERALLMENSCONCUTOUTTEMPLATE-027645fd-dea7-4416-a50a-79182d2c0bdc-1285x1800.webp',
                description: 'Churchill Peacoat Navy'
            }
        ]
    };

    return (
        <div>
            <Logo url="https://www.itochu.co.jp/en/news/press/2017/__icsFiles/afieldfile/2017/11/24/news_171116_1.png" />
            <Origin brandOrigin="London, United Kingdom" />
            <Carrusel content={gloverallCarrusel} />
            <h3 className='history-phone-title'>History</h3>
            <History brandText="Founded in 1951, Gloverall has been synonymous with quality British outerwear for over 70 years. The brand began by importing surplus military duffle coats after World War II, eventually developing their own signature styles that would come to define British fashion." />
            <img
                className='gloverall-military'
                src='https://i.ibb.co/FB69RCy/history-duffle-coat-hms-iron-duke-lead.jpg'
                alt='Military duffle coat'
            />
            <History brandText="Gloverall grew rapidly, relocating to Northamptonshire and expanding internationally during the 1960s and 1970s, with key markets in Japan, the U.S., and Europe. In the 1980s, they designed coats for the British Olympic team and received accolades like the British Apparel Export Award." />
            {/* <History brandText="The duffle and peacoats have military and nautical origins. The duffle, adopted by the Royal Navy in the 1880s, was functional with coarse wool, large pockets, and practical closures. The peacoat, with an ambiguous 18th-century origin, was worn by sailors and evolved to signify rank. Both became symbols of resilience and utility, appealing to post-war consumers and remaining relevant today." /> */}

            <History brandText="Today, Gloverall continues to manufacture their iconic duffle coats in England, combining traditional craftsmanship with contemporary design. Each piece reflects the brand's commitment to quality materials and timeless style, maintaining their position as a leader in British heritage fashion." />
            <img
                className='gloverall-drawing'
                src='https://i.ibb.co/z8bRxcs/drawing.png'
                alt='Drawing for Gloverall'
            />
            <div className="gloverall">
                <BestSellers brandBsContent={gloverallBs} />
            </div>
            <Socials
                instagram="https://www.instagram.com/gloverall/"
                facebook="https://www.facebook.com/Gloverall"
                website="https://www.gloverall.com/"
            />
        </div>

    )
}

export default GloverallPhone;