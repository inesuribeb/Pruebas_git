import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Root from './Root.jsx'
import Sanders from './pages/sanders/Sanders.jsx'
import Gloverall from './pages/gloverall/Gloverall'
import Moonstar_jp from './pages/moonstar_jp/Moonstar_jp'
import IlBussetto from './pages/ilBussetto/IlBussetto'
import Moonstar_810s from './pages/moonstar_810s/Moonstar_810'
import ShoesLikePottery from './pages/shoesLikePottery/ShoesLikePottery'

const router = createBrowserRouter([
  {
    path: "/",             
    element: <Root />,   
    children: [          
      {
        path: "/sanders",          
        element: <Sanders />,
      },
      {
        path: "/gloverall",     
        element: <Gloverall />,
      },
      {
        path: "/moonstar_jp",     
        element: <Moonstar_jp />,
      },
      {
        path: "/ilBussetto",    
        element: <IlBussetto />,
      },
      {
        path: "/moonstar_810s",   
        element: <Moonstar_810s />,
      },
      {
        path: "/shoesLikePottery",  
        element: <ShoesLikePottery />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
