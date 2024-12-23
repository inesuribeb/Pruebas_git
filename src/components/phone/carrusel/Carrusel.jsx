import { useState, useRef } from 'react';
import './Carrusel.css';

function Carrusel({ content }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const carruselRef = useRef(null);
    const images = content.images;
    const length = images.length;

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    return (
        <div className="carrusel-container-mobile">
            <div 
                className="carrusel-track"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                ref={carruselRef}
                style={{
                    transform: `translateX(-${currentIndex * 90}%)`,
                }}
            >
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className={`carrusel-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img 
                            src={image.url} 
                            alt={image.description}
                            className="carrusel-image"
                        />
                    </div>
                ))}
            </div>
            
            <div className="carrusel-info">
                <p className={images[currentIndex].textColor}>
                    {images[currentIndex].description}
                </p>
                <div className="carrusel-counter">
                    {currentIndex + 1} / {length}
                </div>
            </div>
        </div>
    );
}

export default Carrusel;