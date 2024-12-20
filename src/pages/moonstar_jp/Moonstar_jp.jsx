import Structure from "../../components/structure/structure";
import './Moonstar_jp.css'

function MoonstarJp (){
    const moonstarJpCarousel = {
        images: [
            {
                url: "https://i.ibb.co/BsSr05w/also-image02-2x.jpg",
                description: "Moonstar Japan's classic canvas sneakers displayed in a minimalist studio setting. Photographed by Yuki Nakamura."
            },
            {
                url: "https://i.ibb.co/Z1KJ4Tf/Captura-de-pantalla-2024-11-15-a-las-21-33-05.png",
                description: "A close-up of Moonstar Japan's signature vulcanized sole process. Captured at their Kurume factory."
            },
            {
                url: "https://i.ibb.co/DRLcxvs/Captura-de-pantalla-2024-11-15-a-las-21-30-46.png",
                description: "Moonstar Japan's latest collection showcased in a traditional Japanese courtyard."
            },
            {
                url: "https://i.ibb.co/58WjwLb/Captura-de-pantalla-2024-11-15-a-las-21-28-23.png",
                description: "Moonstar Japan's latest collection showcased in a traditional Japanese courtyard."
            }
        ]
    };
    
    const moonstarJpInfo = {
        logo: "https://moonstar-manufacturing.jp/moonstar/wp-content/themes/madeinkurume/img/moonstar_logo.png",
        title: "Moonstar Jp",
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
        history: "Established in 1873, Moonstar Japan is a pioneer in footwear craftsmanship, originating from Kurume, a city synonymous with quality shoemaking. \n\nThe brand’s dedication to traditional techniques, such as the vulcanized rubber process, has earned it a place in the global market as a leader in both durability and design. \n\nMoonstar Japan emphasizes simplicity, comfort, and practicality, ensuring that every pair of shoes reflects the brand's philosophy of timeless functionality. With over a century of expertise, Moonstar Japan continues to innovate while preserving its artisanal roots, offering footwear that resonates with both tradition and modernity."
    };
    
    return (
        <>
                <Structure 
                    carouselContent={moonstarJpCarousel}
                    infoContent={moonstarJpInfo}
                    pageClass={"moonstarJp-page"}
                /> 
        </>
    );
}

export default MoonstarJp;