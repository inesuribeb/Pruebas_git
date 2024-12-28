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

