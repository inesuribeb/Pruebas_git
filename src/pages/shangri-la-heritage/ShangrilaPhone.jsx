import Logo from '../../components/phone/logo/Logo';
import Carrusel from '../../components/phone/carrusel/Carrusel'
import History from '../../components/phone/textPhone/History';
import Origin from '../../components/phone/textPhone/Origin';
import Socials from '../../components/phone/textPhone/Socials';

import './ShangrilaPhone.css';

function ShangrilaPhone() {
    const shangrilaCarrusel = {
        images: [
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-chiodo-brown-fur-collar-black-horsehide-jacket-lifestyle-3.jpg",
                description: "Inspired by 1950s Motorcycle jackets and revisited with a unique Italian touch, the “Chiodo” Black Horsehide Leather Jacket represents an authentic garment.",
                textColor: "dark"
            },
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-craftsmanship-artisanal-artisan-hand-made-in-italy-products-1.jpg",
                description: "Shangri-La Heritage champions Italian craftsmanship, combining traditional techniques with over 40 years of artisanal expertise and passion.",
                textColor: "dark" 
            },
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2023/02/shangri-la-heritage-varsity-navy-blue-wool-jacket-lifestyle-1.jpg",
                description: "Inspired by early 1930s Varsity jackets from Ivy League schools and Car Clubs and revisited with a unique Italian touch, the “Varsity” Wool Jacket represents an authentic garment.",
                textColor: "dark" 
            },
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-craftsmanship-artisanal-artisan-hand-made-in-italy-raw-materials.jpg",
                description: "Shangri-La Heritage champions Italian craftsmanship, combining traditional techniques with over 40 years of artisanal expertise and passion.",
                textColor: "dark" 
            },
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-enzo-sabbia-shearling-car-coat-lifestyle-3.jpg",
                description: "Inspired by 1940s Car Coats and revisited with a unique Italian touch, the “Enzo” Shearling Car Coat represents an authentic garment made of Italian Merino Shearling Sheepskin from Tuscany (Italy).",
                textColor: "dark" 
            },
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-craftsmanship-artisanal-artisan-hand-made-in-italy-maurizio-2.jpg",
                description: "Shangri-La Heritage champions Italian craftsmanship, combining traditional techniques with over 40 years of artisanal expertise and passion.",
                textColor: "dark" 
            },  
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-enzo-sabbia-suede-car-coat-lifestyle-2.jpg",
                description: "Inspired by 1940s Car Coats and revisited with a unique Italian touch, the “Enzo” Leather Car Coat represents an authentic garment made of Calfskin suede from Tuscany (Italy) and “Espresso Coffee” color viscose lining.",
                textColor: "dark" 
            },   
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-craftsmanship-artisanal-artisan-hand-made-in-italy-raw-materials-3.jpg",
                description: "Shoes Like Pottery sneakers styled in a casual outdoor shoot. Captured by Hiroshi Takahashi.",
                textColor: "dark" 
            },
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-bivacco-black-western-down-jacket-lifestyle-3.jpg",
                description: "“Bivacco” Black Western Down Jacket.",
                textColor: "dark" 
            },
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-craftsmanship-artisanal-artisan-hand-made-in-italy-anna-maria-1.jpg",
                description: "Shangri-La Heritage champions Italian craftsmanship, combining traditional techniques with over 40 years of artisanal expertise and passion.",
                textColor: "dark" 
            },
            
        ]
    };
    return (
        <div>
            <Logo url="https://calame-paris.com/cdn/shop/collections/Shangri-La-Heritage-logo-black-red.png?v=1652697039" />
            <Origin brandOrigin="Bergamo, Italy" />
            <Carrusel content={shangrilaCarrusel} />
            <h3 className='history-phone-title'>History</h3>
            <History brandText="Shangri-La Heritage is an Italian brand renowned for its commitment to crafting vintage-inspired garments that blend traditional craftsmanship with timeless design." />
            <img
                className='slp-fabric'
                src='https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-craftsmanship-artisanal-artisan-hand-made-in-italy-workshop.jpg'
                alt='Shangrila'
            />
            <History brandText="Founded in Bergamo, the brand specializes in leather jackets and apparel, meticulously handcrafted using classic artisanal techniques and premium materials such as high-quality Italian leather and natural fabrics." />
            <History brandText="Drawing inspiration from the aesthetics of the 1940s and 1950s, Shangri-La Heritage captures the spirit of exploration and classic motorcycling, offering garments that are both durable and full of character." />
            <img
                className='slp-fabric'
                src='https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-craftsmanship-artisanal-artisan-hand-made-in-italy-raw-materials.jpg'
                alt='Shangrila'
            />
            <img
                className='slp-fabric'
                src='https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-craftsmanship-artisanal-artisan-hand-made-in-italy-raw-materials-1.jpg'
                alt='Shangrila'
            />
            <img
                className='slp-fabric'
                src='https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-craftsmanship-artisanal-artisan-hand-made-in-italy-moreno-2.jpg'
                alt='Shangrila'
            />
            <Socials
                instagram="https://www.instagram.com/shangrilaheritage/"
                facebook="https://www.facebook.com/shoeslikepottery"
                website="https://shangrilaheritage.it/"
            />
        </div>
    )
}

export default ShangrilaPhone;