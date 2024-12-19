import Carousel from "../carousel/Carousel";
import TruncatedAbout from "../buttons/TruncatedAbout";
import { useNavigate, useLocation } from 'react-router-dom';
import './Swipe.css'

function Swipe() {
    const navigate = useNavigate();
    const location = useLocation();
    const cameFromAnotherRoute = location.key !== 'default';

    const swipeCarousel = {
        images: [
            {
                url: "https://i.ibb.co/wcHTqw7/13557251-143654299390676-624785656-a.jpg",
                description: ""
            },
            {
                url: "/images/shoesLikePottery/collection1.jpg",
                description: ""
            }
        ]
    };

    const swipeStatement = {
        about: "We are an agency specializing in the licensing, representation, marketing management, and promotion of authentic brands in Spain and Portugal. Our core values when welcoming new brands to our agency are authenticity, quality, and certified origin. \n\nWith over 25 years of experience in the industry, we have built extensive knowledge and a respected reputation within the community. We work closely with our brands to optimize their growth and visibility, always prioritizing the best interests of both the firms we represent and the customers who choose their products. Maintaining a strong and transparent connection between the firm, agency, and client is fundamental to creating a positive and trustworthy communication framework. \n\nOur passion for this sector is rooted in our people and our products. We focus on establishing brands by starting with their 'why'—the essence of their purpose and identity. Our customer base is robust and diverse, including major department stores, high-end retailers, independent boutiques, and men's clothing stores throughout our territory. We provide a platform for any brand to thrive in our market while fostering sustainable and organic growth for our clients."
    };

    return (
        <>
            <div className="swipe-page">
                <div className="swipe-container">
                    <div className="first-column-swipe">
                        <Carousel content={swipeCarousel} />
                    </div>
                    <div className="second-column-swipe">
                        <TruncatedAbout hideButton={true} />
                        <p>{swipeStatement.about}</p>
                        {cameFromAnotherRoute && (
                            <button
                                onClick={() => navigate(-1)}
                                className="show-less-btn"
                            >
                                Show less
                            </button>
                        )}
                        {/* <div className="contact">
                            <p>gabriel@swipeagency.com</p>
                            <a href="https://www.instagram.com/swipebilbao/" target="_blank">Instagram</a>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Swipe;