import { useNavigate } from 'react-router-dom';
import './TruncatedAbout.css'

function TruncatedAbout({ hideButton = false }) {
    const navigate = useNavigate();
    
    return (
        <div className="truncated-about">
            <h3>
                Swipe Agency is a fashion representation agency based in Bilbao,<br></br> promoting brands across Spain and Portugal.
                {!hideButton && (
                    <button 
                        onClick={() => navigate('/')} 
                        className="show-more-btn"
                    >
                        ...
                    </button>
                )}
            </h3>
        </div>
    );
}

export default TruncatedAbout;