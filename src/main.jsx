import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",             
    element: <Root />,   
    children: [          
      {
        path: "/sanders",          
        element: <App />,
      },
      {
        path: "/gloverall",     
        element: <App />,
      },
      {
        path: "/moonstar_jp",     
        element: <App />,
      },
      {
        path: "/ilbussetto",    
        element: <App />,
      },
      {
        path: "/moonstar_810s",   
        element: <App />,
      },
      {
        path: "/shoesLikePottery",  
        element: <App />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
