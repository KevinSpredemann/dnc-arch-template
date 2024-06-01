import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../../assets/dnc-logo.png';
import FacebookLogo from '../../assets/facebook-icon.svg';
import InstagramLogo from '../../assets/instagram-icon.svg';
import LinkedinLogo from '../../assets/linkedin-icon.svg';
import TwitterLogo from '../../assets/twitter-icon.svg';

function Footer() {
    return (
        <footer className="al-center d-flex">
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} alt="img" className="footer-logo" />
                        <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className="d-flex social-links">
                            <a href="#" target="_blank"><img src={FacebookLogo} alt="img" /></a>
                            <a href="#" target="_blank"><img src={InstagramLogo} alt="img" /></a>
                            <a href="#" target="_blank"><img src={LinkedinLogo} alt="img" /></a>
                            <a href="#" target="_blank"><img src={TwitterLogo} alt="img" /></a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul>
                                <li><Link className="grey-1-color" to="/">Home</Link></li>
                                <li><Link className="grey-1-color" to="/about">About</Link></li>
                                <li><Link className="grey-1-color" to="/projects">Projects</Link></li>
                                <li><Link className="grey-1-color" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="txt-center footer-copy grey-1-color">
                    Copyright © DNC - 2024
                </div>
            </div>
        </footer>
    );
}

export default Footer;