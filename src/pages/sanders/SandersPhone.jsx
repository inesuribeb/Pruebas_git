import Logo from '../../components/phone/logo/Logo'
import Carrusel from '../../components/phone/carrusel/Carrusel'
import History from '../../components/phone/textPhone/History';
import Origin from '../../components/phone/textPhone/Origin';
import Socials from '../../components/phone/textPhone/Socials';
import BestSellers from '../../components/phone/bestSellers/BestSellers';

import './SandersPhone.css';

function SandersPhone() {
    const sandersCarrusel = {
        images: [
            {
                url: "https://i.ibb.co/9rKrKNm/firstsanders-TRUE.png",
                description: "Showcase of Sanders' classic brogues in a refined studio setting. Photographed by Edward Clarke.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/FJGqXkt/miamor.png",
                description: "Behind the scenes: Sanders' shoemaking process at their factory in Rushden, England."
            },
            {
                url: "https://i.ibb.co/HpjWSjh/Captura-de-pantalla-2024-11-15-a-las-20-18-04.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/gJLRbbL/3.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/Zgwh54r/2.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/Dzrtv5s/8.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/84rb5FC/7.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/0VYFrf5/5.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/BjpzNYh/1.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/WVyVHNR/Captura-de-Pantalla-2024-12-27-a-las-14-58-29.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/2NH1kfb/Captura-de-Pantalla-2024-12-27-a-las-14-59-05.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/TY4H5Nb/Captura-de-Pantalla-2024-12-27-a-las-14-59-43.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/WkRXPF4/Captura-de-Pantalla-2024-12-27-a-las-14-59-21.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
        ]
    };

    const sandersBs = {
        images: [
            {
                url: 'https://i.ibb.co/TqMGzcj/Captura-de-pantalla-2024-11-15-a-las-20-27-09.png',
                description: 'Hi Top | Polo Snuff Suede Chukka Boot'
            },
            {
                url: 'https://i.ibb.co/bdtqvRz/Captura-de-pantalla-2024-11-15-a-las-20-27.png',
                description: 'Ash | Indiana Tan Suede Monkey Shoe'
            }
        ]
    };
    return (
        <div>
            <Logo url="https://sanders.jp/cdn/shop/files/logo_wh_500x.png?v=1636988252" />
            <Origin brandOrigin="Rushden, United Kingdom" />
            <Carrusel content={sandersCarrusel} />
            <h3 className='history-phone-title'>History</h3>
            <History brandText="Founded in 1873, Sanders & Sanders Ltd. is one of the oldest and most esteemed shoemakers in England. Based in Rushden, Northamptonshire, the heart of British shoemaking, Sanders has a long-standing tradition of producing high-quality, handcrafted footwear. " />
            <History brandText="Known for their impeccable craftsmanship, durability, and timeless designs, Sanders shoes have been worn by style icons and professionals alike. From military boots to elegant brogues, every pair embodies the brand's commitment to excellence and heritage. " />
            <History brandText="Today, Sanders continues to merge traditional shoemaking techniques with contemporary style, ensuring their place as a staple in modern wardrobes." />
            <img
                className='sanders-pictures'
                src='https://i.ibb.co/Fxbhqh9/ygyg.jpg'
                alt='Sanders shoes'
            />
            <img
                className='sanders-pictures'
                src='https://i.ibb.co/mF8jn3z/4.png'
                alt='Sanders shoes'
            />
            
            <div className="sandersBs">
                <BestSellers brandBsContent={sandersBs} />
            </div>
            <Socials
                instagram="https://www.instagram.com/sandersshoes/"
                // facebook="https://www.facebook.com/profile.php?id=61556541003931"
                website="https://www.sanders-uk.com/"
            />
        </div>
    )
}

export default SandersPhone;