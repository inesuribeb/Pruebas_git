import Logo from '../../components/phone/logo/Logo';
import Carrusel from '../../components/phone/carrusel/Carrusel'
import History from '../../components/phone/textPhone/History';
import Origin from '../../components/phone/textPhone/Origin';
import Socials from '../../components/phone/textPhone/Socials';

import './SunrayPhone.css';

function SunrayPhone() {
    const sunrayCarrusel = {
        images: [
            {
                url: "https://i.ibb.co/pLR5n36/sunray7.jpg",
                description: "",
            },
            {
                url: "https://i.shgcdn.com/5fd4dc2a-4a29-4824-b68c-94f91db52bd9/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
                description: "",
            },
            
            {
                url: "https://i.ibb.co/Np0xcnj/sunray11.jpg",
                description: "",
            },
            {
                url: "https://i.ibb.co/6DVw8VP/sunray12.jpg",
                description: "",
            },
            {
                url: "https://i.ibb.co/WVC7R5r/sunray10.jpg",
                description: "",
                textColor: "dark"
            },
            
            {
                url: "https://i.ibb.co/7t3pfLJ/sunray13.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/hdNQV9D/sunray2.jpg",
                description: "",
                textColor: "dark"
            },

            {
                url: "https://i.ibb.co/9nmTmjf/sunray9.jpg",
                description: "",
            },
            {
                url: "https://i.ibb.co/m9HxN2b/sunray6.jpg",
                description: "",
                textColor: "dark"
            },
            // {
            //     url: "https://i.shgcdn.com/b4a9ea66-ccfd-4f8b-90e0-8a729f87bb0b/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
            //     description: "",
            // },
            {
                url: "https://i.ibb.co/18sYJG6/sunray8.jpg",
                description: "",
                textColor: "dark"
            },
            // {
            //     url: "https://i.shgcdn.com/6053eb6a-cbbc-4517-bf65-7867a4dd783c/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
            //     description: "",
            // },
            {
                url: "https://i.ibb.co/JFsQ74D/sunray3.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/QFFrKP8/sunray5.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/8DRrTnB/sunray4.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/hgPFN7Q/sunray1.jpg",
                description: "",
                textColor: "dark"
            }     
        ]
    };
    return (
        <div>
            <Logo url="https://calame-paris.com/cdn/shop/collections/Shangri-La-Heritage-logo-black-red.png?v=1652697039" />
            <Origin brandOrigin="Bergamo, Italy" />
            <Carrusel content={sunrayCarrusel} />
            <h3 className='history-phone-title'>History</h3>
            <History brandText="Shangri-La Heritage is an Italian brand renowned for its commitment to crafting vintage-inspired garments that blend traditional craftsmanship with timeless design." />
            <img
                className='slp-fabric'
                src='https://i.shgcdn.com/ce1f369c-eb74-4907-8a6e-a47a384c02c0/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
                alt='Sunray'
            />
            <History brandText="Founded in Bergamo, the brand specializes in leather jackets and apparel, meticulously handcrafted using classic artisanal techniques and premium materials such as high-quality Italian leather and natural fabrics." />
            <History brandText="Drawing inspiration from the aesthetics of the 1940s and 1950s, Shangri-La Heritage captures the spirit of exploration and classic motorcycling, offering garments that are both durable and full of character." />
            <img
                className='slp-fabric'
                src=''
                alt='Sunray'
            />
            <img
                className='slp-fabric'
                src='https://i.shgcdn.com/b4a9ea66-ccfd-4f8b-90e0-8a729f87bb0b/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
                alt='Sunray'
            />
            <img
                className='slp-fabric'
                src='https://i.shgcdn.com/6053eb6a-cbbc-4517-bf65-7867a4dd783c/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
                alt='Sunray'
            />
            <Socials
                instagram="https://www.instagram.com/shangrilaheritage/"
                website="https://shangrilaheritage.it/"
            />
        </div>
    )
}

export default SunrayPhone;