import Logo from '../../components/phone/logo/Logo'
import Carrusel from '../../components/phone/carrusel/Carrusel'
import History from '../../components/phone/textPhone/History';
import Origin from '../../components/phone/textPhone/Origin';
import Socials from '../../components/phone/textPhone/Socials';

import './IlBussettoPhone.css';

function IlBussettoPhone() {
    const ilBussettoCarrusel = {
        images: [
            {
                // url: "https://i.ibb.co/vXn9JrQ/ilbussetto.png",
                url: "https://i.ibb.co/z86MH51/Captura-de-pantalla-2024-11-15-a-las-21-20.png",
                description: "Showcase of Il Bussetto's artisanal leather wallets. Photography by Clara Rossi, Milan, Italy."
            },
            {
                url: "https://i.ibb.co/G22rQcD/Captura-de-pantalla-2024-11-15-a-las-21-21-01.png",
                description: "Behind the scenes: crafting Il Bussetto's signature leather goods. Workshop in Florence, Italy."
            },
            {
                url: "https://i.ibb.co/SyMV84H/Captura-de-pantalla-2024-11-15-a-las-21-22.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            {
                url: "https://i.ibb.co/T4Xpwm1/Captura-de-pantalla-2024-11-15-a-las-21-07.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            {
                url: "https://i.ibb.co/WB6WTY2/Captura-de-pantalla-2024-11-15-a-las-21-15-copia.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            {
                url: "https://i.ibb.co/cxVHhnb/Captura-de-pantalla-2024-11-15-a-las-21-08-28.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            {
                url: "https://i.ibb.co/y86Ds65/Captura-de-pantalla-2024-11-15-a-las-21-12-36.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            {
                url: "https://i.ibb.co/2W6Mj4t/Captura-de-pantalla-2024-11-15-a-las-21-12.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            },
            {
                url: "https://i.ibb.co/X8dzkpv/Captura-de-pantalla-2024-11-15-a-las-21-06.png",
                description: "Il Bussetto's premium leather accessories displayed in a minimalist editorial shoot."
            }
        ]
    };
    return (
        <div>
            <Logo url="https://ilbussetto.it/cdn/shop/files/logo_copy_1x_e94fc7e2-72c1-4a61-86e7-5499ed3ab5e2.png?v=1713343928&width=280" />
            <Origin brandOrigin="Milan, Italy" />
            <Carrusel content={ilBussettoCarrusel} />
            
            <h3 className='history-phone-title'>History</h3>
            <History brandText="Established in 2004, Il Bussetto is a celebrated Italian brand known for its impeccable craftsmanship and innovative techniques in leatherworking. The brand takes its name from an ancient leather-polishing tool, reflecting its dedication to preserving traditional methods." />
            <div className="twoColumnsIlBussetto">
                <img
                    className='ilBussettoGirl'
                    src='https://i.ibb.co/KVcd2RR/Il-Bussetto-for-Reliquary-SF-5835.webp'
                    alt='Girl wearing Il Bussetto purse'
                />
                <img
                    className='ilBussettoGirl'
                    src='https://i.ibb.co/Hz3HS98/Il-Bussetto-for-Reliquary-SF-5826.webp'
                    alt='Girl wearing Il Bussetto purse'
                />
            </div>
            <History brandText="Specializing in seamless, hand-dyed leather goods, Il Bussetto combines timeless aesthetics with modern functionality. From wallets to cardholders, every piece is crafted with precision in Tuscany, showcasing the brand's commitment to quality and sustainability. " />
            <History brandText="Il Bussetto has earned a global reputation for its unique and durable products, embodying the essence of Italian artistry. " />
            <img
                className='picturesIlBus'
                src='https://i.ibb.co/M7d2zNr/about.webp'
                alt='Il Bussetto hancrafted'
            />
            
            <Socials
                instagram="https://www.instagram.com/ilbussetto/"
                facebook="https://www.facebook.com/ilbussetto"
                website="https://ilbussetto.it/"
            />
        </div>
    )
}

export default IlBussettoPhone;