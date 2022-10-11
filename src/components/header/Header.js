import React, { useState } from 'react';
import './Header.css';
import avatar from '../../img/avatar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Header() {
    const [mobile, setMobile] = useState(false);
    
    return (
        <header>
            <div className='header' id='home'>
                <div className='area-mobile'>
                    <Link className='logo' to='banner' smooth={true} duration={1000}>
                        <img src={avatar} className='logo-img' alt='Avatar Renan Lima'/>
                        <h3>Renan A Lima</h3>
                    </Link>
                    <button className='toogle-menu' onClick={e => setMobile(!mobile)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <ul className={mobile?'ativo menu-principal':'menu-principal sections'}>
                    <li className='menu-item'><Link className='menu-link' to='sobre' smooth={true} duration={1000}>About me</Link></li>
                    <li className='menu-item'><Link className='menu-link' to='conhecimentos' smooth={true} duration={1000}>Knowledge</Link></li>
                    <li className='menu-item'><Link className='menu-link' to='freelances' smooth={true} duration={1000}>Jobs</Link></li>
                    <li className='menu-item'><Link className='menu-link' to='experiencia' smooth={true} duration={1000}>Experience</Link></li>
                    <li className='menu-item'><Link className='menu-link' to='contato' smooth={true} duration={1000}>Contact</Link></li>
                </ul>
                <ul className={mobile?'ativo menu-principal redes-sociais':'menu-principal redes-sociais'}>
                    <li className='menu-item'><a target='_blank' className='menu-link' href='https://www.facebook.com/renanlima.freelance/' rel='noreferrer'><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li className='menu-item'><a target='_blank' className='menu-link' href='https://www.linkedin.com/in/renan-lima-28692b163/' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li className='menu-item'><a target='_blank' className='menu-link' href='https://github.com/renandevlima' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;