import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './HeaderTwo.css'

function HeaderTwo() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const getHeaderClass = () => {
        const path = location.pathname;
        switch (path) {
            case '/':
                return 'header-two-swipe';
            case '/gloverall':
                return 'header-two-gloverall';
            case '/sanders':
                return 'header-two-sanders';
            case '/moonstar_jp':
                return 'header-two-moonstar';
            case '/ilBussetto':
                return 'header-two-ilbussetto';
            case '/moonstar_810s':
                return 'header-two-moonstar_810s';
            case '/shoesLikePottery':
                return 'header-two-shoesLikePottery';
            default:
                return 'header-two-desktop';
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header-two-desktop ${getHeaderClass()}`}>
            <button
                onClick={toggleMenu}
                className="hamburger-two-button"
                aria-label="Toggle menu"
            >
                ☰
            </button>


            {isMenuOpen && (
                <nav className="desktop-two-nav">
                    <div className="about-us-container">
                        <h2 className="header-subtitle">Swipe Agency</h2>
                        <ul>
                            <li className="nav-two-item">
                                <Link to="/" onClick={toggleMenu}>
                                    About us
                                    <div className="hover-two-image">
                                        <img src="https://i.ibb.co/FJGqXkt/miamor.png" alt="Sanders Preview" />
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-two-item">
                                <Link to="/contact" onClick={toggleMenu}>
                                    Contact
                                    <div className="hover-two-image">
                                        <img src="https://i.ibb.co/1dZspTW/Captura-de-Pantalla-2024-12-19-a-las-21-30-00.png" alt="Gloverall Preview" />
                                    </div>
                                </Link>
                            </li>
                            </ul>
                    </div>
                    <div className="brands-container">
                        <h2 className="header-subtitle">Our brands</h2>
                        <ul>
                            <li className="nav-two-item">
                                <Link to="/sanders" onClick={toggleMenu}>
                                    Sanders
                                    <div className="hover-two-image">
                                        <img src="https://i.ibb.co/FJGqXkt/miamor.png" alt="Sanders Preview" />
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-two-item">
                                <Link to="/gloverall" onClick={toggleMenu}>
                                    Gloverall
                                    <div className="hover-two-image">
                                        <img src="https://i.ibb.co/1dZspTW/Captura-de-Pantalla-2024-12-19-a-las-21-30-00.png" alt="Gloverall Preview" />
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-two-item">
                                <Link to="/moonstar_jp" onClick={toggleMenu}>
                                    Moonstar
                                    <div className="hover-two-image">
                                        <img src="https://i.ibb.co/vhS593j/Captura-de-pantalla-2024-11-15-a-las-21-29-00.png" alt="Moonstar Preview" />
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-two-item">
                                <Link to="/ilBussetto" onClick={toggleMenu}>
                                    Il Bussetto
                                    <div className="hover-two-image">
                                        <img src="https://i.ibb.co/SyMV84H/Captura-de-pantalla-2024-11-15-a-las-21-22.png" alt="Il Bussetto" />
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-two-item">
                                <Link to="/moonstar_810s" onClick={toggleMenu}>
                                    Moonstar 810s
                                    <div className="hover-two-image">
                                        <img src="https://i.ibb.co/25ZtQyN/htdht.png" alt="Moonstar 810s" />
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-two-item">
                                <Link to="/shoesLikePottery" onClick={toggleMenu}>
                                    Shoes Like Pottery
                                    <div className="hover-two-image">
                                        <img src="https://i.ibb.co/ZJKDr9q/38020017-1.jpg" alt="Shoes Like Pottery" />
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-two-item">
                                <Link to="/shangriLaHeritage" onClick={toggleMenu}>
                                    Shangri-La Heritage
                                    <div className="hover-two-image">
                                        <img src="https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-chiodo-brown-fur-collar-black-horsehide-jacket-lifestyle-3.jpg" alt="Shangri-la jacket" />
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-two-item">
                                <Link to="/sunray" onClick={toggleMenu}>
                                    Sunray Sportswear
                                    <div className="hover-two-image">
                                        <img src="https://i.ibb.co/pLR5n36/sunray7.jpg" alt="Sunray t-shirts" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default HeaderTwo;