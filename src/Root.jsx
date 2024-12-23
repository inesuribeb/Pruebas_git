import { Outlet, Link, useLocation } from 'react-router-dom';
import './Root.css'

import FadeInContent from './components/loadingBar/FadeInContent.jsx';


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
        return 'header-desktop';
    }
  };

  return (
    <>
      <main>

        <FadeInContent>
          <Outlet />
        </FadeInContent>

      </main>
      <header className={`header-desktop ${getHeaderClass()}`}>
        <nav>
          <ul>
            <li className="nav-item">
              <Link to="/sanders">Sanders</Link>
              <div className="hover-image">
                <img src="https://i.ibb.co/FJGqXkt/miamor.png" alt="Sanders Preview" />
              </div>
            </li>

            <li className="nav-item">
              <Link to="/gloverall">Gloverall</Link>
              <div className="hover-image">
                <img src="https://i.ibb.co/1dZspTW/Captura-de-Pantalla-2024-12-19-a-las-21-30-00.png" alt="Gloverall Preview" />
              </div>
            </li>

            <li className="nav-item">
              <Link to="/moonstar_jp">Moonstar</Link>
              <div className="hover-image">
                <img src="https://i.ibb.co/vhS593j/Captura-de-pantalla-2024-11-15-a-las-21-29-00.png" alt="Moonstar Preview" />
              </div>
            </li>

            <li className="nav-item">
              <Link to="/ilBussetto">Il Bussetto</Link>
              <div className="hover-image">
                <img src="https://i.ibb.co/SyMV84H/Captura-de-pantalla-2024-11-15-a-las-21-22.png" alt="Il Bussetto" />
              </div>
            </li>

            <li className="nav-item">
              <Link to="/moonstar_810s">Moonstar 810s</Link>
              <div className="hover-image">
                <img src="https://i.ibb.co/25ZtQyN/htdht.png" alt="Moonstar 810s" />
              </div>
            </li>

            <li className="nav-item">
              <Link to="/shoesLikePottery">Shoes Like Pottery</Link>
              <div className="hover-image">
                <img src="https://i.ibb.co/ZJKDr9q/38020017-1.jpg" alt="Shoes Like Pottery" />
              </div>

            </li>
          </ul>
        </nav>
      </header>

    </>
  );
}

export default Root;