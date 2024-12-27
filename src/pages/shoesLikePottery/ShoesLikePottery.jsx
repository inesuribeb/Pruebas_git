import Structure from "../../components/structure/structure";
import './ShoesLikePottery.css'

function ShoesLikePottery (){
    const shoesLikePotteryCarousel = {
        images: [
            {
                url: "https://i.ibb.co/2F04S84/38040016.jpg",
                description: "Showcase of Shoes Like Pottery sneakers highlighting the unique kiln-firing process. Photographed in Fukuoka, Japan."
            },
            {
                url: "https://i.ibb.co/PY8wFwn/86590007-679x1024.jpg",
                description: "Detail shot of Shoes Like Pottery's signature blue sole and vulcanized construction."
            },
            {
                url: "https://i.ibb.co/gjytRH0/38040006.jpg",
                description: "Shoes Like Pottery sneakers styled in a casual outdoor shoot. Captured by Hiroshi Takahashi."
            },
            {
                url: "https://i.ibb.co/rGyKhRd/Captura-de-pantalla-2024-11-15-a-las-21-37-04.png",
                description: "Shoes Like Pottery sneakers styled in a casual outdoor shoot. Captured by Hiroshi Takahashi."
            },
            {
                url: "https://i.ibb.co/bKDdXbk/86590012.jpg",
                description: "Shoes Like Pottery sneakers styled in a casual outdoor shoot. Captured by Hiroshi Takahashi."
            },
            {
                url: "https://i.ibb.co/6NGy0jz/Captura-de-pantalla-2024-11-15-a-las-21-39-22.png",
                description: "Shoes Like Pottery sneakers styled in a casual outdoor shoot. Captured by Hiroshi Takahashi."
            },
            {
                url: "https://i.ibb.co/b2pXVhW/38040009.jpg",
                description: "Shoes Like Pottery sneakers styled in a casual outdoor shoot. Captured by Hiroshi Takahashi."
            },
            {
                url: "https://i.ibb.co/4Z78YDb/S-L-P01-JP-RED-scaled.jpg",
                description: "Shoes Like Pottery sneakers styled in a casual outdoor shoot. Captured by Hiroshi Takahashi."
            },
            {
                url: "https://i.ibb.co/Bc1Hyny/38620027.jpg",
                description: "Shoes Like Pottery sneakers styled in a casual outdoor shoot. Captured by Hiroshi Takahashi."
            },
            {
                url: "https://i.ibb.co/tcMqXVk/38040019-1.jpg",
                description: "Shoes Like Pottery sneakers styled in a casual outdoor shoot. Captured by Hiroshi Takahashi."
            },
        ]
    };
    
    const shoesLikePotteryInfo = {
        logo: "https://shoeslikepottery.com/en/pls-en/wp-content/themes/ktwd/img/slp-logo-b.svg",
        title: "Shoes Like Pottery",
        origin: "Kurume, Japan",
        socials: [
            {
                name: "Instagram",
                url: "https://instagram.com/shoeslikepottery"
            },
            {
                name: "Facebook",
                url: "https://facebook.com/shoeslikepottery"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/shoeslikepottery"
            }
        ],
        history: "Shoes Like Pottery is a Japanese footwear brand celebrated for its unique manufacturing process inspired by pottery techniques. \n\nBased in Kurume, Japan, the brand employs a vulcanization method where each shoe is kiln-fired at high temperatures, resulting in a durable and flexible sole. The signature blue sole, symbolizing craftsmanship, sets Shoes Like Pottery apart in the world of casual footwear. \n\nCombining minimalist design with unparalleled quality, the brand reflects the essence of Japanese artistry and tradition. Each pair is meticulously handcrafted, ensuring a timeless and functional product loved by sneaker enthusiasts worldwide."
    };
    
    return (
        <>
                <Structure 
                    carouselContent={shoesLikePotteryCarousel}
                    infoContent={shoesLikePotteryInfo}
                    pageClass={"shoesLikePottery-page"}
                /> 
        </>
    );
}

export default ShoesLikePottery;