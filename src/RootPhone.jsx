import { Outlet, Link } from 'react-router-dom';
import './RootPhone.css'
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function RootPhone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header-mobile">
        <h1>SWIPE AGENCY</h1>
        <div className="menu-icon" onClick={toggleMenu}>
    
          {isMenuOpen ? (
            <CloseIcon
              sx={{ fontSize: 24, color: 'black' }}
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <DragHandleIcon
              sx={{ fontSize: 24, color: 'black' }}
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {isMenuOpen && (

          <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
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