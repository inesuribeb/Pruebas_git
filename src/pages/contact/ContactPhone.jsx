import './ContactPhone.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function ContactPhone() {
    return (
        <div className="contact-phone-container">
            <h1 className="contact-phone">SWI  PE</h1>
            <h3 className='email-phone'>gabriel@swipeagency.com</h3>
            <h3 className='instagram-phone'>
                <a href="https://www.instagram.com/swipebilbao/" target="_blank" rel="noopener noreferrer">
                    Instagram
                    <ArrowOutwardIcon></ArrowOutwardIcon>
                </a>
            </h3>
        </div>
    )
}

export default ContactPhone;