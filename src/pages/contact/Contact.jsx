import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import './Contact.css'
import TypewriterMessage from './TypewriterMessage';

function Contact() {
    console.log('Contact renderizado'); // Añade esto al inicio del componente

    return (
        <div className='contact-wrapper'>
            <div className="contact-desktop-container">
                <div className='first-line-contact'>
                    <h3 className='instagram-desktop'>
                        <a href="https://www.instagram.com/swipebilbao/" target="_blank" rel="noopener noreferrer">
                            Instagram <ArrowOutwardIcon></ArrowOutwardIcon>
                        </a>
                    </h3>
                    <h3>Sales manager: Gabriel</h3>
                    <h3>+34 678 010 017</h3>
                    <h3 className='email-desktop'>swipeagencyswipe@gmail.com</h3>
                </div>

                {/* <div className='second-line-center-contact'>
                <p className='contact-message'>Hey! Thanks for visiting <em>Swipe Agency</em>! If you have a <em>store</em> or are interested in any of the <em>iconic brands</em> we’re showcasing, don’t hesitate to reach out. We’d love to collaborate and bring <em>timeless style to your space.</em></p>
            </div> */}

                {/* <div className='second-line-center-contact'>
                {console.log('Antes de renderizar TypewriterMessage')}
                <TypewriterMessage />
                {console.log('Después de renderizar TypewriterMessage')}
            </div> */}

                <div className='text-container'>
                    <div className='second-line-center-contact'>
                        <TypewriterMessage />
                    </div>
                </div>

                <div className='third-line-contact'>
                    <h3>Showroom Location: Avda. Ramon y Cajal n2 Bis | 3º Planta Dpto. 13 | CP 48014 Deusto | Bilbao | Bizkaia</h3>
                    <p className='sello'>S</p>
                </div>

                <div className="home-button-container">
                    <Link to="/" className="home-button">
                        HOME
                    </Link>
                </div>

                {/* <div className='sello'>
                    <p>S</p>
                </div> */}
            </div>
        </div>
    )
}

export default Contact;