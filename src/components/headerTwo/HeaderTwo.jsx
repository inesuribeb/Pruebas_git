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
            case '/shangriLaHeritage':  
                return 'header-two-shangrila';
            default:
                return 'header-two-desktop';
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header-two-desktop ${getHeaderClass()}`}>
            {/* <button
                onClick={toggleMenu}
                className="hamburger-two-button"
                aria-label="Toggle menu"
            >
                ☰
            </button> */}

            <button
                onClick={toggleMenu}
                className={`hamburger-two-button ${isMenuOpen ? 'active' : ''}`}
            >
                <span className="hamburger-line top"></span>
                <span className="hamburger-line middle"></span>
                <span className="hamburger-line bottom"></span>
            </button>


            {isMenuOpen && (
                <nav className="desktop-two-nav">

                    <div className="brands-container">
                        <h2 className="header-subtitle">Our Brands</h2>
                        <div className="columns-container">
                            <ul className="footwear-column">
                                <h3 className='products-type-title'>Footwear</h3>
                                <li className="nav-two-item">
                                    <Link to="/sanders" onClick={toggleMenu}>
                                        SANDERS
                                        {/* <div className="hover-two-image">
                                            <img src="https://i.ibb.co/FJGqXkt/miamor.png" alt="Sanders Preview" />
                                        </div> */}
                                    </Link>
                                </li>

                                <li className="nav-two-item">
                                    <Link to="/moonstar_jp" onClick={toggleMenu}>
                                        MOONSTAR
                                        {/* <div className="hover-two-image">
                                            <img src="https://i.ibb.co/vhS593j/Captura-de-pantalla-2024-11-15-a-las-21-29-00.png" alt="Moonstar Preview" />
                                        </div> */}
                                    </Link>
                                </li>

                                <li className="nav-two-item">
                                    <Link to="/moonstar_810s" onClick={toggleMenu}>
                                        MOONSTAR 810s
                                        {/* <div className="hover-two-image">
                                            <img src="https://i.ibb.co/hL48wcs/STUDEN-10.jpg" alt="Moonstar 810s" />
                                        </div> */}
                                    </Link>
                                </li>

                                <li className="nav-two-item">
                                    <Link to="/shoesLikePottery" onClick={toggleMenu}>
                                        SHOES LIKE POTTERY
                                        {/* <div className="hover-two-image">
                                            <img src="https://i.ibb.co/ZJKDr9q/38020017-1.jpg" alt="Shoes Like Pottery" />
                                        </div> */}
                                    </Link>
                                </li>
                            </ul>



                            <ul className="apparel-column">
                                <h3 className='products-type-title'>Apparel</h3>
                                <li className="nav-two-item">
                                    <Link to="/gloverall" onClick={toggleMenu}>
                                        GLOVERALL
                                        {/* <div className="hover-two-image">
                                            <img src="https://i.ibb.co/jGjpm4T/gloverall1.png" alt="Gloverall Preview" />
                                        </div> */}
                                    </Link>
                                </li>

                                <li className="nav-two-item">
                                    <Link to="/ilBussetto" onClick={toggleMenu}>
                                        IL BUSSETTO
                                        {/* <div className="hover-two-image">
                                            <img src="https://i.ibb.co/300Mm4m/gabardina.png" alt="Il Bussetto" />
                                        </div> */}
                                    </Link>
                                </li>

                                <li className="nav-two-item">
                                    <Link to="/sunray" onClick={toggleMenu}>
                                        SUNRAY SPORTSWEAR
                                        {/* <div className="hover-two-image">
                                            <img src="https://i.ibb.co/pLR5n36/sunray7.jpg" alt="Sunray t-shirts" />
                                        </div> */}
                                    </Link>
                                </li>

                                <li className="nav-two-item">
                                    <Link to="/shangriLaHeritage" onClick={toggleMenu}>
                                        SHANGRI-LA HERITAGE
                                        {/* <div className="hover-two-image">
                                            <img src="https://shangrilaheritage.it/wp-content/uploads/2022/07/shangri-la-heritage-chiodo-brown-fur-collar-black-horsehide-jacket-lifestyle-3.jpg" alt="Shangri-la jacket" />
                                        </div> */}
                                    </Link>
                                </li>


                            </ul>
                        </div>

                    </div>


                    <div className="about-us-container">
                        <h2 className="header-subtitle">Swipe Agency</h2>
                        <ul>
                            <li className="nav-two-item">
                                <Link to="/" onClick={toggleMenu}>
                                    About us
                                    {/* <div className="hover-two-image">
                                        <img src="https://i.ibb.co/FJGqXkt/miamor.png" alt="Sanders Preview" />
                                    </div> */}
                                </Link>
                            </li>

                            <li className="nav-two-item">
                                <Link to="/contact" onClick={toggleMenu}>
                                    Contact
                                    {/* <div className="hover-two-image">
                                        <img src="https://i.ibb.co/1dZspTW/Captura-de-Pantalla-2024-12-19-a-las-21-30-00.png" alt="Gloverall Preview" />
                                    </div> */}
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