import Carousel from "../carousel/Carousel";
import TruncatedAbout from "../buttons/TruncatedAbout";
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Swipe.css'

function Swipe() {
    const navigate = useNavigate();
    const location = useLocation();
    const cameFromAnotherRoute = location.key !== 'default';

    const swipeCarousel = {
        images: [
            // {
            //     url: "https://i.ibb.co/T8BMR7S/playa.png",
            //     description: ""
            // },
            {
                url: "https://i.ibb.co/ZWWsqqp/homeswipeweb.png",
                description: ""
            },
        ]
    };

    const swipeStatement = {
        about: "We are an agency specializing in the <i>licensing, representation, marketing management, and promotion</i> of authentic brands in Spain and Portugal. Our core values when welcoming new brands to our agency are <i>authenticity</i>, <i>quality</i>, and <i>certified origin</i>. \n\nWith over 25 years of experience in the industry, we have built extensive knowledge and a respected reputation within the community. We work closely with our brands to optimize their <i>growth</i> and <i>visibility</i>, always prioritizing the best interests of <i>both</i> the firms we represent and the customers who choose their products. Maintaining a <i>strong</i> and <i>transparent connection</i> between the <i>firm</i>, <i>agency</i>, and <i>client</i> is fundamental to creating a positive and trustworthy communication framework. \n\nOur passion for this sector is rooted in our people and our products. We focus on establishing brands by starting with their <i>'why'</i>—<i>the essence of their purpose and identity</i>. Our customer base is <i>robust</i> and <i>diverse</i>, including major department stores, high-end retailers, independent boutiques, and men's clothing stores throughout our territory. We provide a platform for any brand to thrive in our market while <i>fostering sustainable and organic growth</i> for our clients."
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
                        {/* <p>{swipeStatement.about}</p> */}
                        <p dangerouslySetInnerHTML={{ __html: swipeStatement.about }}></p>
                        {cameFromAnotherRoute && (
                            <button
                                onClick={() => navigate(-1)}
                                className="show-less-btn"
                            >
                                Show less
                            </button>
                        )}
                    </div>
                    {/* <div className="contact-button-container">
                        <Link to="/contact" className="contact-button">
                            CONTACT US
                        </Link>
                    </div> */}
                </div>
            </div>

        </>
    );
}

export default Swipe;