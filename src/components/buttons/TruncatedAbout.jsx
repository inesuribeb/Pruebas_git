import { useNavigate } from 'react-router-dom';
import './TruncatedAbout.css'

function TruncatedAbout({ hideButton = false }) {
    const navigate = useNavigate();
    
    return (
        <div className="truncated-about">
            <h3>
                SWIPE AGENCY is a fashion representation agency based in Bilbao, promoting brands across Spain and Portugal.
                {!hideButton && (
                    <button 
                        onClick={() => navigate('/')} 
                        className="show-more-btn"
                    >
                        Read more
                    </button>
                )}
            </h3>
        </div>
    );
}

export default TruncatedAbout;