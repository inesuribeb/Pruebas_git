import Logo from '../../components/phone/logo/Logo'
import Carrusel from '../../components/phone/carrusel/Carrusel'
import History from '../../components/phone/textPhone/History';
import Origin from '../../components/phone/textPhone/Origin';
import Socials from '../../components/phone/textPhone/Socials';
import BestSellers from '../../components/phone/bestSellers/BestSellers';

import './Moonstar_jpPhone.css';

function Moonstar_jpPhone() {
    const moonstarJpCarrusel = {
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

    const moonstarJpBs = {
        images: [
            {
                url: 'https://i.ibb.co/M1nxFT6/24-FW-HIBASKET.jpg',
                description: 'Hi Basket'
            },
            {
                url: 'https://i.ibb.co/h11yCmt/24-SS-FV-ALWEATHERRF.jpg',
                description: 'AlWeather'
            },
            {
                url: 'https://i.ibb.co/Qjr9v6R/22-SS-GYMCLASSIC.jpg',
                description: 'Gym Classic'
            }
        ]
    };

    return (
        <div>
            <Logo url="https://moonstar-manufacturing.jp/moonstar/wp-content/themes/madeinkurume/img/moonstar_logo.png" />
            <Origin brandOrigin="Kurume, Japan" />
            <Carrusel content={moonstarJpCarrusel} />
            <h3 className='history-phone-title'>History</h3>
            <History brandText="Established in 1873, Moonstar Japan is a pioneer in footwear craftsmanship, originating from Kurume, a city synonymous with quality shoemaking. " />
            <History brandText="The brand’s dedication to traditional techniques, such as the vulcanized rubber process, has earned it a place in the global market as a leader in both durability and design. " />
            <History brandText="Moonstar Japan emphasizes simplicity, comfort, and practicality, ensuring that every pair of shoes reflects the brand's philosophy of timeless functionality. With over a century of expertise, Moonstar Japan continues to innovate while preserving its artisanal roots, offering footwear that resonates with both tradition and modernity." />
            <img
                className='moonstar-drawing'
                src='https://i.ibb.co/x8sdr6p/Captura-de-Pantalla-2024-12-20-a-las-15-58-55.png'
                alt='Drawing for Moonstar'
            />
            <div className="moonstarJpBs">
                <BestSellers brandBsContent={moonstarJpBs} />
            </div>
            <Socials
                instagram="https://www.instagram.com/moonstar_jp/"
                // facebook="https://www.facebook.com/profile.php?id=61556541003931"
                website="https://www.moonstar.co.jp/"
            />
        </div>
    )
}

export default Moonstar_jpPhone;