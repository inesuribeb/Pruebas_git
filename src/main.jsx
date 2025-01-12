import React, { StrictMode, Suspense, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Root from './Root.jsx'
import RootPhone from './RootPhone.jsx';
import { useMediaQuery } from 'react-responsive';
import LoadingBar from './components/loadingBar/LoadingBar'
import 'nprogress/nprogress.css';

import FadeInContent from './components/loadingBar/FadeInContent.jsx';

const RootWrapper = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    document.body.className = isMobile ? 'mobile' : 'desktop';
  }, [isMobile]);

  return (
    <>
    <LoadingBar />
      <Suspense fallback={<div>Loading...</div>}>
        {isMobile ? <RootPhone /> : <Root />}
      </Suspense>
    </>
  );
};

const Swipe = React.lazy(() => import('./components/swipe/Swipe.jsx'));
const Sanders = React.lazy(() => import('./pages/sanders/Sanders.jsx'));
const Gloverall = React.lazy(() => import('./pages/gloverall/Gloverall'));
const Moonstar_jp = React.lazy(() => import('./pages/moonstar_jp/Moonstar_jp'));
const IlBussetto = React.lazy(() => import('./pages/ilBussetto/IlBussetto'));
const Moonstar_810s = React.lazy(() => import('./pages/moonstar_810s/Moonstar_810'));
const ShoesLikePottery = React.lazy(() => import('./pages/shoesLikePottery/ShoesLikePottery'));
const Contact = React.lazy(() => import('./pages/contact/Contact.jsx'))
const Shangrila = React.lazy(() => import('./pages/shangri-la-heritage/Shangrila.jsx'))
const Sunray = React.lazy(() => import('./pages/sunray/Sunray.jsx'))

const MobileSwipe = React.lazy(() => import('./components/swipe/SwipePhone.jsx'));
const MobileSanders = React.lazy(() => import('./pages/sanders/SandersPhone.jsx'));
const MobileGloverall = React.lazy(() => import('./pages/gloverall/GloverallPhone'));
const MobileMoonstar = React.lazy(() => import('./pages/moonstar_jp/Moonstar_jpPhone'));
const MobileIlBussetto = React.lazy(() => import('./pages/ilBussetto/IlBussettoPhone'));
const MobileMoonstar810s = React.lazy(() => import('./pages/moonstar_810s/Moonstar_810sPhone'));
const MobileShoesLikePottery = React.lazy(() => import('./pages/shoesLikePottery/ShoesLikePotteryPhone'));
const MobileContact = React.lazy(() => import('./pages/contact/ContactPhone.jsx'))
const MobileShangrila = React.lazy(() => import('./pages/shangri-la-heritage/ShangrilaPhone.jsx'))
const MobileSunray = React.lazy(() => import('./pages/sunray/SunrayPhone.jsx'))

const ResponsiveComponent = ({ MobileVersion, DesktopVersion }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // return (
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <FadeInContent>
  //     {isMobile ? <MobileVersion /> : <DesktopVersion />}
  //     </FadeInContent>
  //   </Suspense>
  // );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FadeInContent>
        <Suspense fallback={<div>Loading content...</div>}>
          {isMobile ? <MobileVersion /> : <DesktopVersion />}
        </Suspense>
      </FadeInContent>
    </Suspense>
  );

};


const router = createBrowserRouter([
  {
    path: "/",             
    element: <RootWrapper />,   
    children: [    
      {
        index: true, 
        element: <ResponsiveComponent 
          MobileVersion={MobileSwipe} 
          DesktopVersion={Swipe} 
        />
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
      {
        path: "/contact",  
        element: <ResponsiveComponent 
          MobileVersion={MobileContact} 
          DesktopVersion={Contact} 
        />,
      },
      {
        path: "/shangriLaHeritage",  
        element: <ResponsiveComponent 
          MobileVersion={MobileShangrila} 
          DesktopVersion={Shangrila} 
        />,
      },
      {
        path: "/sunray",  
        element: <ResponsiveComponent 
          MobileVersion={MobileSunray} 
          DesktopVersion={Sunray} 
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
