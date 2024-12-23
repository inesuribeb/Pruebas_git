import { useState, useEffect } from 'react';
import './FadeInContent.css'

const FadeInContent = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5);
  
      return () => {
        clearTimeout(timer);
        setIsVisible(false);
      };
    }, [children]);
  
    return (
      <div 
        className={`fade-content ${isVisible ? 'visible' : ''}`}
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    );
};

export default FadeInContent;




// const FadeInContent = ({ children }) => {
//     const [currentContent, setCurrentContent] = useState(children);
//     const [previousContent, setPreviousContent] = useState(null);
//     const [isTransitioning, setIsTransitioning] = useState(false);
  
//     useEffect(() => {
//       if (children !== currentContent) {
//         setPreviousContent(currentContent);
//         setCurrentContent(children);
//         setIsTransitioning(true);
  
//         const timer = setTimeout(() => {
//           setPreviousContent(null);
//           setIsTransitioning(false);
//         }, 300); // Duración de la transición
  
//         return () => clearTimeout(timer);
//       }
//     }, [children]);
  
//     return (
//       <div className="fade-container">
//         {previousContent && (
//           <div className="fade-content fade-out">
//             {previousContent}
//           </div>
//         )}
//         <div className={`fade-content fade-in ${isTransitioning ? 'transitioning' : ''}`}>
//           {currentContent}
//         </div>
//       </div>
//     );
//   };
  
//   export default FadeInContent;