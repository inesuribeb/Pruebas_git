import TruncatedAbout from '../buttons/TruncatedAbout';
import './Info.css'

function Info({ logo, title, origin, socials = [], history }) {
    return (
        <>
            <div className='intro'>
                <TruncatedAbout></TruncatedAbout>
            </div>
            <div className="info-container">

                <div className="first-column">
                    
                    <div className="info-content">
                        <h1>{title}</h1>
                    </div>

                    <div className="info-logo">
                        <img src={logo} alt={title} />
                    </div>

                    <div className="info-origin">
                        <p>{origin}</p>
                    </div>

                    <div className="info-socials">
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

                <div className="second-column">
                    <div className="info-history">
                        <p>{history}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;