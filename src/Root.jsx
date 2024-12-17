// routes/Root.jsx
import { Outlet, Link } from 'react-router-dom';

function Root() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {/* <li><Link to="/">Inicio</Link></li> */}
            <li><Link to="/sanders">Sanders</Link></li>
            <li><Link to="/gloverall">Gloverall</Link></li>
            <li><Link to="/moonstar_jp">Moonstar</Link></li>
            <li><Link to="/ilbussetto">Il Bussetto</Link></li>
            <li><Link to="/moonstar_810s">Moonstar 810s</Link></li>
            <li><Link to="/shoesLikePottery">Shoes Like Pottery</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        
        <Outlet />

      </main>

      
      <footer>© 2024 Swipe Agency</footer>
    </div>
  );
}

export default Root;