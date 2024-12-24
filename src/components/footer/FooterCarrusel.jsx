// Footercarrusel.jsx
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FooterCarrusel.css';

function FooterCarrusel({ content }) {
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
        <div className="footer-carrusel-container">
            <div 
                className="footer-carrusel-track"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                ref={carruselRef}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
               
            >
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className="footer-carrusel-slide"
                    >
                        <Link to={image.link} className="footer-carrusel-link">
                            <div className="footer-carrusel-title">
                                {image.title}
                            </div>
                            <img 
                                src={image.url} 
                                alt={image.title}
                                className="footer-carrusel-image"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FooterCarrusel;