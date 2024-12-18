import { useNavigate } from 'react-router-dom';


function TruncatedAbout({ hideButton = false }) {
    const navigate = useNavigate();
    
    return (
        <div className="truncated-about">
            <h3>SWIPE AGENCY is a fashion representation agency based in Bilbao, promoting brands across Spain and Portugal.</h3>
            {!hideButton && (
                <button 
                    onClick={() => navigate('/')} 
                    className="show-more-btn"
                >
                    Show more
                </button>
            )}
        </div>
    );
}

export default TruncatedAbout;