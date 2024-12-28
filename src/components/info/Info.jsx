import TruncatedAbout from '../buttons/TruncatedAbout';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './Info.css'
import '../../../public/fonts/fonts.css'


function Info({ logo, title, origin, socials = [], history, brandClass}) {
    return (
        <>
            <div className='intro'>
                <TruncatedAbout></TruncatedAbout>
            </div>
            
            {/* Sacamos el logo fuera del info-container */}
            <div className="logo-wrapper">
                <img src={logo} alt={title} />
            </div>
            
            <div className={`info-container ${brandClass}`}>
                <div className="info-main">
                    <div className="info-left">
                        <div className="info-origin">
                            <h5>Origin</h5>
                            <p>{origin}</p>
                        </div>

                        <div className="info-socials">
                            <h5>Official Sites</h5>
                            {socials.map((social, index) => (
                                <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.name} <ArrowOutwardIcon></ArrowOutwardIcon>
                            </a>
                            ))}
                        </div>
                    </div>

                    <div className="info-right">
                        <h5>History</h5>
                        <p>{history}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;