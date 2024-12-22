import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import './LoadingBar.css'

NProgress.configure({ 
  showSpinner: false,
  minimum: 0.3,
  speed: 800,
  easing: 'ease',
  trickleSpeed: 200,

});

function LoadingBar() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    // Simulamos un tiempo de carga
    const timer = setTimeout(() => {
      NProgress.done();
    }, 1000);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location]);

  return null;
}

export default LoadingBar;