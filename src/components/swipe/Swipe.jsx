import Carousel from "../carousel/Carousel";

function Swipe (){
    const swipeCarousel = {
        logo: [
            {
                url: "/images/shoesLikePottery/collection1.jpg",
                description: "Showcase of Shoes Like Pottery sneakers highlighting the unique kiln-firing process. Photographed in Fukuoka, Japan."
            },
            {
                url: "/images/shoesLikePottery/collection1.jpg",
                description: "Showcase of Shoes Like Pottery sneakers highlighting the unique kiln-firing process. Photographed in Fukuoka, Japan."
            }
        ]
    };
    
    const swipeStatement = {
       about: "We are an agency specializing in the licensing, representation, marketing management, and promotion of authentic brands in Spain and Portugal. Our core values when welcoming new brands to our agency are authenticity, quality, and certified origin. With over 25 years of experience in the industry, we have built extensive knowledge and a respected reputation within the community. We work closely with our brands to optimize their growth and visibility, always prioritizing the best interests of both the firms we represent and the customers who choose their products. Maintaining a strong and transparent connection between the firm, agency, and client is fundamental to creating a positive and trustworthy communication framework. Our passion for this sector is rooted in our people and our products. We focus on establishing brands by starting with their 'why'—the essence of their purpose and identity. Our customer base is robust and diverse, including major department stores, high-end retailers, independent boutiques, and men's clothing stores throughout our territory. We provide a platform for any brand to thrive in our market while fostering sustainable and organic growth for our clients."
    };
    
    return (
        <>
            <main className="shoesLikePottery-page">
                <Carousel>
                    carouselContent={swipeCarousel}
                </Carousel>
                <p>{swipeStatement}</p>
            </main>
        </>
    );
}

export default Swipe;