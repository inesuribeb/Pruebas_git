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
                url: "https://i.ibb.co/vXn9JrQ/ilbussetto.png",
                description: "Showcase of Il Bussetto's artisanal leather wallets. Photography by Clara Rossi, Milan, Italy."
            },
            {
                url: "https://i.ibb.co/G22rQcD/Captura-de-pantalla-2024-11-15-a-las-21-21-01.png",
                description: "Behind the scenes: crafting Il Bussetto's signature leather goods. Workshop in Florence, Italy."
            },
            {
                url: "https://i.ibb.co/wWmN62Z/try.png",
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
            <History brandText="Specializing in seamless, hand-dyed leather goods, Il Bussetto combines timeless aesthetics with modern functionality. From wallets to cardholders, every piece is crafted with precision in Tuscany, showcasing the brand's commitment to quality and sustainability. " />
            <History brandText="Il Bussetto has earned a global reputation for its unique and durable products, embodying the essence of Italian artistry. " />
            <Socials
                instagram="https://www.instagram.com/ilbussetto/"
                facebook="https://www.facebook.com/ilbussetto"
                website="https://ilbussetto.it/"
            />
        </div>
    )
}

export default IlBussettoPhone;