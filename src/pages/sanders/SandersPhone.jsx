import Logo from '../../components/phone/logo/Logo'
import Carrusel from '../../components/phone/carrusel/Carrusel'
import History from '../../components/phone/textPhone/History';
import Origin from '../../components/phone/textPhone/Origin';
import Socials from '../../components/phone/textPhone/Socials';

function SandersPhone() {
    const sandersCarrusel = {
        images: [
            {
                url: "https://i.ibb.co/9rKrKNm/firstsanders-TRUE.png",
                description: "Showcase of Sanders' classic brogues in a refined studio setting. Photographed by Edward Clarke.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/dWbJ9mn/Captura-de-pantalla-2024-11-15-a-las-20-18-52.png",
                description: "Behind the scenes: Sanders' shoemaking process at their factory in Rushden, England."
            },
            {
                url: "https://i.ibb.co/HpjWSjh/Captura-de-pantalla-2024-11-15-a-las-20-18-04.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            }
        ]
    };
    return (
        <div>
            <Logo url="https://www.sanders-uk.com/images/modules/promo_units/1623656432-53412900.png" />
            <Origin brandOrigin="Rushden, United Kingdom" />
            <Carrusel content={sandersCarrusel} />
            <h3 className='history-phone-title'>History</h3>
            <History brandText="Founded in 1873, Sanders & Sanders Ltd. is one of the oldest and most esteemed shoemakers in England. Based in Rushden, Northamptonshire, the heart of British shoemaking, Sanders has a long-standing tradition of producing high-quality, handcrafted footwear. " />
            <History brandText="Known for their impeccable craftsmanship, durability, and timeless designs, Sanders shoes have been worn by style icons and professionals alike. From military boots to elegant brogues, every pair embodies the brand's commitment to excellence and heritage. " />
            <History brandText="Today, Sanders continues to merge traditional shoemaking techniques with contemporary style, ensuring their place as a staple in modern wardrobes." />
            <Socials
                instagram="https://www.instagram.com/sandersshoes/"
                // facebook="https://www.facebook.com/profile.php?id=61556541003931"
                website="https://www.sanders-uk.com/"
            />
        </div>
    )
}

export default SandersPhone;