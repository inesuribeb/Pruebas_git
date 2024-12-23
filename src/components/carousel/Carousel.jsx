import { useState } from 'react';
// import { useState, useRef, useEffect } from 'react';

import './Carousel.css'
// import { handleImageLoad, updateTextColor } from '../../../public/js/AverageRGB.js';
// import React from 'react';



function Carousel({ content }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = content.images;
    const length = images.length;


    // const imageRef = useRef(null);
    // const descriptionRef = useRef(null);
    // const counterRef = useRef(null);
    // const nextButtonRef = useRef(null);
    // useEffect(() => {
    //     if (imageRef.current) {
    //         updateTextColor(
    //             imageRef.current,
    //             descriptionRef.current,
    //             counterRef.current,
    //             nextButtonRef.current
    //         );
    //     }
    // }, [currentIndex]);


    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    // React.useEffect(() => {
    //     handleImageLoad();
    // }, [currentIndex]);

    return (
        <div className="carousel-container">
            {/* <div className="carousel-navigation"> */}
            <div className={`carousel-navigation ${images[currentIndex].textColor}`}>


                <div className="carousel-info">
                    <p>{images[currentIndex].description}</p>
                    <div className="carousel-counter">
                        {currentIndex + 1} / {length}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="carousel-next-button"
                >
                    next
                </button>
            </div>

            <div className="carousel-image-container">
                <button
                    className="carousel-invisible-prev"
                    onClick={prevSlide}
                    aria-label="Previous image"
                />
                <button 
                    className="carousel-invisible-next"
                    onClick={nextSlide}
                    aria-label="Next image"
                />
        
                <img
                    id="carousel-image"
                    src={images[currentIndex].url}
                    alt={images[currentIndex].description}
                    // crossOrigin="anonymous"
                    // onLoad={(e) => handleImageLoad(e.target)}        
                    // ref={imageRef}
                />
            </div>

        </div>
    );
}

export default Carousel;