import Carousel from "../carousel/Carousel";
import Info from "../info/Info";
import './structure.css'

function Structure({ carouselContent, infoContent, pageClass }) {

    return (
        <div className={`${pageClass} structure-page`}>
            <div className="structure-main">
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
            </div>
        </div>
    );
}

export default Structure;