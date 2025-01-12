import { Outlet } from 'react-router-dom';
import './Root.css'
import FadeInContent from './components/loadingBar/FadeInContent.jsx';
// import Header from './components/header/Header.jsx'
import HeaderTwo from './components/headerTwo/HeaderTwo.jsx'

function Root() {
  return (
    <>
      <main>
        <FadeInContent>
          <Outlet />
        </FadeInContent>
      </main>
      {/* <Header /> */}
      <HeaderTwo />
    </>
  );
}

export default Root;