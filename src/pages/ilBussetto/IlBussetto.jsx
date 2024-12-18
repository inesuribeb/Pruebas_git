import Structure from "../../components/structure/structure";

function IlBussetto (){
    const ilBussettoCarousel = {
        images: [
            {
                url: "/images/ilBussetto/collection1.jpg",
                description: "Showcase of Il Bussetto's artisanal leather wallets. Photography by Clara Rossi, Milan, Italy."
            },
            {
                url: "/images/ilBussetto/collection2.jpg",
                description: "Behind the scenes: crafting Il Bussetto's signature leather goods. Workshop in Florence, Italy."
            },
            {
                url: "/images/ilBussetto/collection3.jpg",
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
        history: "Established in 2004, Il Bussetto is a celebrated Italian brand known for its impeccable craftsmanship and innovative techniques in leatherworking. The brand takes its name from an ancient leather-polishing tool, reflecting its dedication to preserving traditional methods. Specializing in seamless, hand-dyed leather goods, Il Bussetto combines timeless aesthetics with modern functionality. From wallets to cardholders, every piece is crafted with precision in Tuscany, showcasing the brand's commitment to quality and sustainability. Il Bussetto has earned a global reputation for its unique and durable products, embodying the essence of Italian artistry."
    };
    
    return (
        <>
            <main className="ilBussetto-page">
                <Structure 
                    carouselContent={ilBussettoCarousel}
                    infoContent={ilBussettoInfo}
                /> 
            </main>
        </>
    );
}

export default IlBussetto;