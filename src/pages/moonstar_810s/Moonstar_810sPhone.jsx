import Logo from '../../components/phone/logo/Logo'
import Carrusel from '../../components/phone/carrusel/Carrusel'
import History from '../../components/phone/textPhone/History';
import Origin from '../../components/phone/textPhone/Origin';
import Socials from '../../components/phone/textPhone/Socials';
import BestSellers from '../../components/phone/bestSellers/BestSellers';

import './Moonstar_810sPhone.css';

function Moonstar_810sPhone() {
    const moonstar810Carrusel = {
        images: [
            {
                url: "https://i.ibb.co/2Njbvqh/hym.png",
                description: "Editorial shoot featuring Moonstar 810 sneakers in an urban landscape. Location: Tokyo, Japan."
            },
            {
                url: "https://i.ibb.co/4Z29LGH/jt.png",
                description: "Showcase of the Moonstar 810 collection blending heritage and modern design. Photographed by Kenji Tanaka."
            },
            {
                url: "https://i.ibb.co/MPPkHJd/sdv.png",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/rbb1pQv/fkjbv.png",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/4YZ0Ngn/Captura-de-pantalla-2024-11-15-a-las-21-49.png",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/R3cdp2C/vfs.png",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            },
            {
                url: "https://i.ibb.co/vmyzz1j/slide-003-1.jpg",
                description: "Detail shot of Moonstar 810's premium craftsmanship. Focus on materials and textures."
            }
        ]
    };

    const moonstar810sBs = {
        images: [
            {
                url: 'https://i.ibb.co/P19FfrX/unive.png',
                description: 'Unive Black'
            },
            {
                url: 'https://i.ibb.co/3Rg9GVs/STUDEN-10.jpg',
                description: 'Studen Black'
            },
            {
                url: 'https://i.ibb.co/6cQ4JzD/kitche-black-2.jpg" alt="kitche-black-2',
                description: 'Kitche Black'
            },
            {
                url: 'https://i.ibb.co/6cQ4JzD/kitche-black-2.jpg" alt="kitche-black-2',
                description: 'Kitche Black'
            }
        ]
    };

    return (
        <div>
            <Logo url="https://and-flow.jp/wp-content/uploads/2024/08/13196_sub1.png" />
            <Origin brandOrigin="Kurume, Japan" />
            <Carrusel content={moonstar810Carrusel} />
            <img
                className='pictures810s'
                src='https://i.ibb.co/n3RDwJT/Captura-de-pantalla-2024-11-15-a-las-21-48-21.png'
                alt='Display Moonstar 810s'
            />
            <h3 className='history-phone-title'>History</h3>
            <History brandText="Founded in 1873, Moonstar is a heritage Japanese footwear brand rooted in the traditions of Kurume, a city renowned for its fine craftsmanship. " />
            <img
                className='pictures810s'
                src='https://i.ibb.co/vd8HygS/Captura-de-Pantalla-2024-12-27-a-las-12-21-29.png'
                alt='Display Moonstar 810s'
            />
            <History brandText="The Moonstar 810s line represents the perfect fusion of the brand’s century-old expertise and modern, functional design. Known for their vulcanized rubber soles and meticulous attention to detail, Moonstar 810 shoes are versatile, durable, and stylish. " />
            <History brandText="Every pair is made with precision in the Kurume factory, ensuring superior quality and comfort. Moonstar continues to innovate while honoring its rich legacy, making it a favorite among footwear enthusiasts worldwide." />
            <img
                className='pictures810s'
                src='https://i.ibb.co/G33YRKq/jyt.png'
                alt='Display Moonstar 810s'
            />
            <img
                className='pictures810s'
                src='https://i.ibb.co/fXCcsTt/Captura-de-pantalla-2024-11-15-a-las-21-51-06.png'
                alt='Display Moonstar 810s'
            />
            <div className="moonstar810sBs">
                <BestSellers brandBsContent={moonstar810sBs} />
            </div>
            <Socials
                instagram="https://www.instagram.com/moonstar_810s/"
                facebook="https://www.facebook.com/profile.php?id=61556541003931"
                website="https://www.bymoonstar.jp/810s/global/"
            />
        </div>
    )
}

export default Moonstar_810sPhone;