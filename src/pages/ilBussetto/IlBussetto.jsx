import Structure from "../../components/structure/structure";
import './IlBussetto.css'

function IlBussetto (){
    const ilBussettoCarousel = {
        images: [
            {
                url: "https://i.ibb.co/7KXX6Rn/Captura-de-pantalla-2024-11-15-a-las-21-20.png",
                description: "Showcase of Il Bussetto's artisanal leather wallets. Photography by Clara Rossi, Milan, Italy."
            },
            {
                url: "https://i.ibb.co/G22rQcD/Captura-de-pantalla-2024-11-15-a-las-21-21-01.png",
                description: "Behind the scenes: crafting Il Bussetto's signature leather goods. Workshop in Florence, Italy."
            },
            {
                url: "https://i.ibb.co/SyMV84H/Captura-de-pantalla-2024-11-15-a-las-21-22.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            }
        ]
    };
    
    const ilBussettoInfo = {
        logo: "/images/ilBussetto/logo.png",
        title: "Il Bussetto",
        origin: "Milan, Italy",
        socials: [
            {
                name: "Instagram",
                url: "https://instagram.com/ilbussetto"
            },
            {
                name: "Facebook",
                url: "https://facebook.com/ilbussetto"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/ilbussetto"
            }
        ],
        history: "Established in 2004, Il Bussetto is a celebrated Italian brand known for its impeccable craftsmanship and innovative techniques in leatherworking. The brand takes its name from an ancient leather-polishing tool, reflecting its dedication to preserving traditional methods. \n\nSpecializing in seamless, hand-dyed leather goods, Il Bussetto combines timeless aesthetics with modern functionality. From wallets to cardholders, every piece is crafted with precision in Tuscany, showcasing the brand's commitment to quality and sustainability. \n\nIl Bussetto has earned a global reputation for its unique and durable products, embodying the essence of Italian artistry."
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