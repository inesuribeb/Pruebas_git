import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Root.css'
// import FadeInContent from './components/loadingBar/FadeInContent.jsx';
// import Header from './components/header/Header.jsx'
import HeaderTwo from './components/headerTwo/HeaderTwo.jsx'

function Root() {
  const location = useLocation();
  return (
    <>
      <main className='main-desktop-general' key={location.pathname}>
        {/* <FadeInContent> */}
          <Outlet />
        {/* </FadeInContent> */}
      </main>
      {/* <Header /> */}
      <HeaderTwo />
    </>
  );
}

export default Root;