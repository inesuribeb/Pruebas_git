import TruncatedAbout from '../buttons/TruncatedAbout';
import './Info.css'

function Info({ logo, title, origin, socials = [], history, brandClass}) {
    return (
        <>
            <div className='intro'>
                <TruncatedAbout></TruncatedAbout>
            </div>
            
            <div className={`info-container ${brandClass}`}>
                <div className="info-header">
                    <h1>{title}</h1>
                    <img src={logo} alt={title} />
                </div>

                {/* Contenido principal */}
                <div className="info-main">
                    <div className="info-left">
                        <div className="info-origin">
                            <h5>Origin</h5>
                            <p>{origin}</p>
                        </div>

                        <div className="info-socials">
                            <h5>Socials</h5>
                            {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.name}
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