import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

import './Socials.css'

function Socials({ instagram, facebook, website }) {
    return (
        <>
            <h3 className='socials-title'>Find them on</h3>
            <div className="socials-phone">
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon sx={{ color: '#000000' }} />
                </a>
            
                <a href={website} target="_blank" rel="noopener noreferrer">
                    <LanguageIcon sx={{ color: '#000000' }} />
                </a>
            </div>
        </>
    )
}

export default Socials;