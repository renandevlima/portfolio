import React, { useState } from 'react';
import "./Header.css";
import avatar from "../../img/avatar.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [mobile, setMobile] = useState(false);
    
    return (
        <header>
            <div className="header">
                <div className="area-mobile">
                    <a href="/" className="logo">
                        <img src={avatar} className="logo-img" alt="Avatar Renan Lima"/>
                        <h3>Renan A Lima</h3>
                    </a>
                    <button className="toogle-menu" onClick={e => setMobile(!mobile)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <ul className={mobile?"ativo menu-principal":"menu-principal"}>
                    <li className="menu-item"><a className="menu-link" href="#">Sobre mim</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">Conhecimentos</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">Freelances</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">Experiência Profissional</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">Contato</a></li>
                </ul>
                <ul className={mobile?"ativo menu-principal redes-sociais":"menu-principal redes-sociais"}>
                    <li className="menu-item"><a target="_blank" className="menu-link" href="https://www.facebook.com/renanlima.freelance/" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li className="menu-item"><a target="_blank" className="menu-link" href="https://www.linkedin.com/in/renan-lima-28692b163/" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li className="menu-item"><a target="_blank" className="menu-link" href="https://github.com/renandevlima" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;