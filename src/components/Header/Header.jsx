import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/dnc-logo.png';

function Header() {
    return (
        <header className="al-center d-flex">
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <img src={Logo} alt="img" />
                    <button className="mobile-menu">Menu</button>
                    <nav>
                        <ul className="d-flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <button>LANG</button>
                        <button>FAV</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;