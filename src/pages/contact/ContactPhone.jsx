import './ContactPhone.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function ContactPhone() {
    return (
        <div className="contact-phone-container">
            <p className='contact-phone-text'>Hey! Thanks for visiting <em>Swipe Agency</em>! If you have a <em>store</em> or are interested in any of the <em>iconic brands</em> we’re showcasing, don’t hesitate to reach out. We’d love to collaborate and bring <em>timeless style to your space.</em></p>
            <div className='contact-info-phone'>
                <h3>Sales manager: Gabriel</h3>
                <h3>+34 678 010 017</h3>
                <h3 className='email-phone'>swipeagencyswipe@gmail.com</h3>
                <h3 className='instagram-phone'>
                    <a href="https://www.instagram.com/swipebilbao/" target="_blank" rel="noopener noreferrer">
                        Instagram
                        <ArrowOutwardIcon></ArrowOutwardIcon>
                    </a>
                </h3>
                <h3>Showroom Location:<br />Avda. Ramon y Cajal n2 Bis<br />3º Planta Dpto. 13<br />CP 48014 Deusto<br />Bilbao | Bizkaia</h3>
            </div>
        </div>
    )
}

export default ContactPhone;