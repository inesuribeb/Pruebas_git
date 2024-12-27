import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import './Contact.css'

function Contact() {
    return (

        <div className="contact-desktop-container">
            <h3 className='instagram-desktop'>
                <a href="https://www.instagram.com/swipebilbao/" target="_blank" rel="noopener noreferrer">
                    Instagram <ArrowOutwardIcon></ArrowOutwardIcon>
                </a>
            </h3>
            <h3 className='email-desktop'>gabriel@swipeagency.com</h3>
            <p className='contact-message'>Hey! Thanks for visiting <em>Swipe Agency</em>! If you have a <em>store</em> or are interested in any of the <em>iconic brands</em> we’re showcasing, don’t hesitate to reach out. We’d love to collaborate and bring <em>timeless style to your space.</em></p>
            <div className="home-button-container">
                <Link to="/" className="home-button">
                    HOME
                </Link>
            </div>
        </div>
       
    )
}

export default Contact;