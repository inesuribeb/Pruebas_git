import React, { useState, useEffect, useRef } from 'react';
import './TypewriterMessage.css'


// const TypewriterMessage = () => {
//     const [displayedText, setDisplayedText] = useState('');
    
//     useEffect(() => {
//         const text = "Hey! Thanks for visiting Swipe Agency! If you have a store or are interested in any of the iconic brands we're showcasing, don't hesitate to reach out. We'd love to collaborate and bring timeless style to your space.";
//         let currentIndex = 0;
        
//         const timer = setInterval(() => {
//             if (currentIndex < text.length) {
//                 setDisplayedText(prev => prev + text.charAt(currentIndex));
//                 currentIndex++;
//             } else {
//                 clearInterval(timer);
//             }
//         }, 50);
        
//         return () => clearInterval(timer);
//     }, []);
    
//     return (
//         <p className='contact-message'>
//             {displayedText}
//             <span className="cursor"></span>
//         </p>
//     );
// };

const TypewriterMessage = () => {
    const [displayedText, setDisplayedText] = useState('');
    
    useEffect(() => {
        const text = "  Hey! Thanks for visiting Swipe Agency! If you have a store or are interested in any of the iconic brands we're showcasing, don't hesitate to reach out. We'd love to collaborate and bring timeless style to your space.";
        let currentIndex = 0;
        
        setDisplayedText(''); 
        
        const timer = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(prev => {
                    console.log('Añadiendo carácter:', text.charAt(currentIndex)); // Debug
                    return prev + text.charAt(currentIndex);
                });
                currentIndex++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        
        return () => clearInterval(timer);
    }, []);
    
    return (
        <p className='contact-message'>
            {displayedText}
            <span className="cursor"></span>
        </p>
    );
};


export default TypewriterMessage;