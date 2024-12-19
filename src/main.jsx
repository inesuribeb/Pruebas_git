import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Root from './Root.jsx'
import { useMediaQuery } from 'react-responsive';

import Swipe from './components/swipe/Swipe';

const Sanders = React.lazy(() => import('./pages/sanders/Sanders.jsx'));
const Gloverall = React.lazy(() => import('./pages/gloverall/Gloverall'));
const Moonstar_jp = React.lazy(() => import('./pages/moonstar_jp/Moonstar_jp'));
const IlBussetto = React.lazy(() => import('./pages/ilBussetto/IlBussetto'));
const Moonstar_810s = React.lazy(() => import('./pages/moonstar_810s/Moonstar_810'));
const ShoesLikePottery = React.lazy(() => import('./pages/shoesLikePottery/ShoesLikePottery'));

const MobileSanders = React.lazy(() => import('./pages/sanders/SandersPhone.jsx'));
const MobileGloverall = React.lazy(() => import('./pages/gloverall/GloverallPhone'));
const MobileMoonstar = React.lazy(() => import('./pages/moonstar_jp/Moonstar_jpPhone'));
const MobileIlBussetto = React.lazy(() => import('./pages/ilBussetto/IlBussettoPhone'));
const MobileMoonstar810s = React.lazy(() => import('./pages/moonstar_810s/Moonstar_810sPhone'));
const MobileShoesLikePottery = React.lazy(() => import('./pages/shoesLikePottery/ShoesLikePotteryPhone'));

const ResponsiveComponent = ({ MobileVersion, DesktopVersion }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </Suspense>
  );
};


const router = createBrowserRouter([
  {
    path: "/",             
    element: <Root />,   
    children: [    
      {
        index: true, 
        element: <Swipe />,
      },       
      {
        path: "/sanders",          
        element: <ResponsiveComponent 
          MobileVersion={MobileSanders} 
          DesktopVersion={Sanders} 
        />
      },
      {
        path: "/gloverall",     
        element: <ResponsiveComponent 
          MobileVersion={MobileGloverall} 
          DesktopVersion={Gloverall} 
        />,
      },
      {
        path: "/moonstar_jp",     
        element: <ResponsiveComponent 
          MobileVersion={MobileMoonstar} 
          DesktopVersion={Moonstar_jp} 
        />,
      },
      {
        path: "/ilBussetto",    
        element: <ResponsiveComponent 
          MobileVersion={MobileIlBussetto} 
          DesktopVersion={IlBussetto} 
        />,
      },
      {
        path: "/moonstar_810s",   
        element: <ResponsiveComponent 
          MobileVersion={MobileMoonstar810s} 
          DesktopVersion={Moonstar_810s} 
        />,
      },
      {
        path: "/shoesLikePottery",  
        element: <ResponsiveComponent 
          MobileVersion={MobileShoesLikePottery} 
          DesktopVersion={ShoesLikePottery} 
        />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
