import FooterCarrusel from './FooterCarrusel'
import './Footer.css'


function Footer() {
    const footerCarrusel = {
        images: [
            {
                url: "https://i.ibb.co/FJGqXkt/miamor.png",
                title: "SANDERS",
                link: "/sanders"
            },
            {
                url: "https://i.ibb.co/HtZ5S0f/gloverallcarre.png",
                title: "GLOVERALL",
                link: "/gloverall"
            },
            {
                url: "https://i.ibb.co/vhS593j/Captura-de-pantalla-2024-11-15-a-las-21-29-00.png",
                title: "MOONSTAR",
                link: "/moonstar_jp"
            },
            {
                url: "https://i.ibb.co/SyMV84H/Captura-de-pantalla-2024-11-15-a-las-21-22.png",
                title: "IL BUSSETTO",
                link: "/ilBussetto"
            },
            {
                url: "https://i.ibb.co/25ZtQyN/htdht.png",
                title: "MOONSTAR 810s",
                link: "/moonstar_810s"
            },
            {
                url: "https://i.ibb.co/ZJKDr9q/38020017-1.jpg",
                title: "SHOES LIKE POTTERY",
                link: "/shoesLikePottery"
            },
            {
                url: "https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-chiodo-brown-fur-collar-black-horsehide-jacket-lifestyle-3.jpg",
                title: "Shangri-La",
                link: "/shangriLaHeritage"
            },
            {
                url: "https://i.ibb.co/pLR5n36/sunray7.jpg",
                title: "Sunray",
                link: "/sunray"
            }
        ]
    };
    return (

            <div className="footer-container">
                <h3 className='footer-title'>Discover our brands</h3>
                <FooterCarrusel content={footerCarrusel} />
                <p>© SWIPE AGENCY 2025</p>
            </div>

    )
}

export default Footer;
