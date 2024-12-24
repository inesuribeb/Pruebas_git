import FooterCarrusel from './FooterCarrusel'
import './Footer.css'


function Footer(){
    const footerCarrusel = {
        images: [
            {
                url: "https://i.ibb.co/FJGqXkt/miamor.png",
                title: "SANDERS",
                link: "/sanders"
            },
            {
                url: "https://i.ibb.co/1dZspTW/Captura-de-Pantalla-2024-12-19-a-las-21-30-00.png",
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
                link: "/iBbussetto"
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
            }
        ]
    };
    return(
        <div className="footer-container">
            <FooterCarrusel content={footerCarrusel} />
            </div>

    )
}

export default Footer;
