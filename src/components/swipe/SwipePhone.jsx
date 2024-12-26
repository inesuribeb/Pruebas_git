import Logo from "../phone/logo/Logo";
import History from "../phone/textPhone/History";


function SwipePhone() {
    return (
        <div>
            <Logo url="https://i.ibb.co/wcHTqw7/13557251-143654299390676-624785656-a.jpg" />
            <h3 className="swipe-intro">SWIPE AGENCY is a fashion representation agency based in Bilbao, promoting brands across Spain and Portugal.</h3>
            <History brandText="We are an agency specializing in the licensing, representation, marketing management, and promotion of authentic brands in Spain and Portugal. Our core values when welcoming new brands to our agency are authenticity, quality, and certified origin. " />
            <History brandText="With over 25 years of experience in the industry, we have built extensive knowledge and a respected reputation within the community. We work closely with our brands to optimize their growth and visibility, always prioritizing the best interests of both the firms we represent and the customers who choose their products. Maintaining a strong and transparent connection between the firm, agency, and client is fundamental to creating a positive and trustworthy communication framework. " />
            <History brandText="Our passion for this sector is rooted in our people and our products. We focus on establishing brands by starting with their 'why'—the essence of their purpose and identity. Our customer base is robust and diverse, including major department stores, high-end retailers, independent boutiques, and men's clothing stores throughout our territory. We provide a platform for any brand to thrive in our market while fostering sustainable and organic growth for our clients." />
        </div>
    )
}

export default SwipePhone;