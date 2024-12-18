import Structure from "../../components/structure/structure";

function MoonstarJp (){
    const moonstarJpCarousel = {
        images: [
            {
                url: "/images/moonstarJp/collection1.jpg",
                description: "Moonstar Japan's classic canvas sneakers displayed in a minimalist studio setting. Photographed by Yuki Nakamura."
            },
            {
                url: "/images/moonstarJp/collection2.jpg",
                description: "A close-up of Moonstar Japan's signature vulcanized sole process. Captured at their Kurume factory."
            },
            {
                url: "/images/moonstarJp/collection3.jpg",
                description: "Moonstar Japan's latest collection showcased in a traditional Japanese courtyard."
            }
        ]
    };
    
    const moonstarJpInfo = {
        logo: "/images/moonstarJp/logo.png",
        title: "Moonstar Japan",
        origin: "Kurume, Japan",
        socials: [
            {
                name: "Instagram",
                url: "https://instagram.com/moonstar_jp"
            },
            {
                name: "Facebook",
                url: "https://facebook.com/moonstar_jp"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/moonstar_jp"
            }
        ],
        history: "Established in 1873, Moonstar Japan is a pioneer in footwear craftsmanship, originating from Kurume, a city synonymous with quality shoemaking. The brand’s dedication to traditional techniques, such as the vulcanized rubber process, has earned it a place in the global market as a leader in both durability and design. Moonstar Japan emphasizes simplicity, comfort, and practicality, ensuring that every pair of shoes reflects the brand's philosophy of timeless functionality. With over a century of expertise, Moonstar Japan continues to innovate while preserving its artisanal roots, offering footwear that resonates with both tradition and modernity."
    };
    
    return (
        <>
            <main className="moonstarJp-page">
                <Structure 
                    carouselContent={moonstarJpCarousel}
                    infoContent={moonstarJpInfo}
                /> 
            </main>
        </>
    );
}

export default MoonstarJp;