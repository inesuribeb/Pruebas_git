import Structure from "../../components/structure/structure";
import './IlBussetto.css'

function IlBussetto (){
    const ilBussettoCarousel = {
        images: [
            {
                url: "https://i.ibb.co/y86Ds65/Captura-de-pantalla-2024-11-15-a-las-21-12-36.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/T4Xpwm1/Captura-de-pantalla-2024-11-15-a-las-21-07.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            {
                url: "https://i.ibb.co/ws5BnpT/Il-Bussetto-for-Reliquary-SF-5835.png",
                description: "Showcase of Il Bussetto's artisanal leather wallets. Photography by Clara Rossi, Milan, Italy."
            },
            {
                url: "https://i.ibb.co/1zVDdDB/adapting.png",
                description: "Behind the scenes: crafting Il Bussetto's signature leather goods. Workshop in Florence, Italy."
            },
            {
                url: "https://i.ibb.co/vXn9JrQ/ilbussetto.png",
                description: "Showcase of Il Bussetto's artisanal leather wallets. Photography by Clara Rossi, Milan, Italy."
            },
            // {
            //     url: "https://i.ibb.co/Y3S3NjF/relleno.png",
            //     description: "Behind the scenes: crafting Il Bussetto's signature leather goods. Workshop in Florence, Italy."
            // },
            {
                url: "https://i.ibb.co/wWmN62Z/try.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            
            {
                url: "https://i.ibb.co/300Mm4m/gabardina.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            {
                url: "https://i.ibb.co/QjFyL9g/Captura-de-pantalla-2024-11-15-a-las-21-08-28.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot.",
                textColor: "dark" 
            },
            
            {
                url: "https://i.ibb.co/2W6Mj4t/Captura-de-pantalla-2024-11-15-a-las-21-12.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            {
                url: "https://i.ibb.co/X8dzkpv/Captura-de-pantalla-2024-11-15-a-las-21-06.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            }
        ]
    };
    
    const ilBussettoInfo = {
        logo: "https://ilbussetto.it/cdn/shop/files/logo_copy_1x_e94fc7e2-72c1-4a61-86e7-5499ed3ab5e2.png?v=1713343928&width=280",
        title: "Il Bussetto",
        origin: "Milan, Italy",
        socials: [
            {
                name: "Instagram",
                url: "https://www.instagram.com/ilbussetto/"
            },
            {
                name: "Website",
                url: "https://ilbussetto.it/"
            }
        ],
        history: "Established in 2004, Il Bussetto is a celebrated Italian brand known for its <i>impeccable</i> craftsmanship and <i>innovative techniques</i> in leatherworking. The brand takes its name from an ancient <i>leather-polishing tool</i>, reflecting its dedication to preserving traditional methods. \n\nSpecializing in seamless, hand-dyed leather goods, Il Bussetto combines timeless <i>aesthetics</i> with <i>modern functionality</i>. From wallets to cardholders, every piece is crafted with precision in <i>Tuscany</i>, showcasing the brand's commitment to <i>quality</i> and <i>sustainability</i>. \n\nIl Bussetto has earned a global reputation for its unique and durable products, embodying the <i>essence of Italian artistry</i>."
    };
    
    return (
        <>
                <Structure 
                    carouselContent={ilBussettoCarousel}
                    infoContent={ilBussettoInfo}
                    pageClass={"ilBussetto-page"}
                /> 
        </>
    );
}

export default IlBussetto;