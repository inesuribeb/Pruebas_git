import Carousel from "../carousel/Carousel";
import Info from "../info/Info";
import './structure.css'

function Structure({ carouselContent, infoContent }) {

    return (
        <div className="structure-page">
            <main className="structure-main">
                <div className="carousel-section">
                    <Carousel content={carouselContent} />
                </div>
                <div className="info-section">
                    <Info 
                        logo={infoContent?.logo}
                        title={infoContent?.title}
                        origin={infoContent?.origin}
                        socials={infoContent?.socials}
                        history={infoContent?.history}
                    />
                </div>
            </main>
        </div>
    );
}

export default Structure;