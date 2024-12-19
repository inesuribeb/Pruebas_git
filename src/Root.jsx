import { Outlet, Link, useLocation } from 'react-router-dom';
import './Root.css'

function Root() {
  const location = useLocation();

  const getHeaderClass = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'header-swipe';
      case '/gloverall':
        return 'header-gloverall';
      case '/sanders':
        return 'header-sanders';
      case '/moonstar_jp':
        return 'header-moonstar';
      case '/ilBussetto':
        return 'header-ilbussetto';
      case '/moonstar_810s':
        return 'header-moonstar_810s';
      case '/shoesLikePottery':
        return 'header-shoesLikePottery';
      default:
        return '';
    }
  };

  return (
    <>
      <main>

        <Outlet />

      </main>
      <header className={getHeaderClass()}>
        <nav>
          <ul>
            <li><Link to="/sanders">Sanders</Link></li>
            <li><Link to="/gloverall">Gloverall</Link></li>
            <li><Link to="/moonstar_jp">Moonstar</Link></li>
            <li><Link to="/ilBussetto">Il Bussetto</Link></li>
            <li><Link to="/moonstar_810s">Moonstar 810s</Link></li>
            <li><Link to="/shoesLikePottery">Shoes Like Pottery</Link></li>
          </ul>
        </nav>
      </header>

      {/* <main>
        
        <Outlet />

      </main> */}
      {/* <footer>© 2024 Swipe Agency</footer> */}
    </>
  );
}

export default Root;