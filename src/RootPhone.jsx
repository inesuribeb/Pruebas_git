import { Outlet, Link } from 'react-router-dom';
import './RootPhone.css'
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';


function RootPhone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    } else {
      setShowContent(false);
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = () => {
    setShowContent(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      setShowContent(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="header-mobile">
        <h1>SWIPE AGENCY</h1>


        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon
              className={`close-icon ${showContent ? 'show' : ''}`}
              sx={{ fontSize: 24, color: 'black' }}
            />
          ) : (
            <DragHandleIcon
              sx={{ fontSize: 24, color: 'black' }}
            />
          )}
        </div>

        {isMenuOpen && (

          <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>

            {showContent && (
              <>
                <ul className="nav-list-mobile">
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/">Swipe</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/sanders">Sanders</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/gloverall">Gloverall</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/moonstar_jp">Moonstar</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/ilBussetto">Il Bussetto</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/moonstar_810s">Moonstar 810s</Link></li>
                  <li className="nav-item-mobile"><Link onClick={handleNavClick} to="/shoesLikePottery">Shoes Like Pottery</Link></li>
                </ul>

                <ul className="second-nav-list-mobile">
                  <li className="second-nav-item-mobile"><Link onClick={handleNavClick} to="/">About us</Link></li>
                  <li className="second-nav-item-mobile"><Link onClick={handleNavClick} to="/sanders">Contact</Link></li>
                </ul>
              </>
            )}
          </nav>
        )}
      </header>

      <main className="main-mobile">
        <Outlet />
      </main>
    </>
  );
}

export default RootPhone;