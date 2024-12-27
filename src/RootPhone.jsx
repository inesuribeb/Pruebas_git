import { Outlet, Link } from 'react-router-dom';
import './RootPhone.css'
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

import FadeInContent from './components/loadingBar/FadeInContent.jsx';
import Footer from './components/footer/Footer.jsx';


function RootPhone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    setIsClosing(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setShowContent(false);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 500);
  };

  const handleNavClick = () => {
    closeMenu();
  };

  useEffect(() => {
    if (!isMenuOpen) {
      setShowContent(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="header-mobile">
        <h1 className="main-title">SWIPE AGENCY</h1>

        <div className="menu-icon">
          {isMenuOpen ? (
            <CloseIcon
              className={`menu-icon-close ${isClosing ? 'fade-out' : 'fade-in'}`}
              sx={{ fontSize: 24, color: 'black' }}
              onClick={closeMenu}
            />
          ) : (
            <DragHandleIcon
              sx={{ fontSize: 24, color: 'black' }}
              onClick={openMenu}
            />
          )}
        </div>

        {isMenuOpen && (
          <nav className={`nav-mobile ${isClosing ? 'slide-up' : 'slide-down'}`}>
            <Link to="/" className="nav-title" onClick={handleNavClick}>SWIPE AGENCY</Link>

            {showContent && (
              <>
                <ul className={`nav-list-mobile ${isClosing ? 'fade-out' : 'fade-in'}`}>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/sanders">Sanders</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/gloverall">Gloverall</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/moonstar_jp">Moonstar</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/ilBussetto">Il Bussetto</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/moonstar_810s">Moonstar 810s</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/shoesLikePottery">Shoes Like Pottery</Link></li>
                </ul>

                <ul className={`second-nav-list-mobile ${isClosing ? 'fade-out' : 'fade-in'}`}>
                  <li className="second-nav-item-mobile"><Link onClick={handleNavClick} to="/">About us</Link></li>
                  <li className="second-nav-item-mobile"><Link onClick={handleNavClick} to="/contact">Contact</Link></li>
                </ul>
              </>
            )}
          </nav>
        )}
      </header>

      <main className="main-mobile">
      <FadeInContent>
          <Outlet />
        </FadeInContent>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default RootPhone;