import Carousel from "../carousel/Carousel";
import Info from "../info/Info";

function Structure({ carouselContent, infoContent }) {

    return (
        <div className="structure-page">
            <main className="structure-main">
                <div className="carousel-section">
                    <Carousel content={carouselContent} />
                </div>
                <div className="info-section">
                    <Info content={infoContent} />
                </div>
            </main>
        </div>
    );
}

export default Structure;