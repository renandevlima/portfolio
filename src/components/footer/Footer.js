import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import curriculo_eng from '../../files/renan_lima_resume.docx';

function Footer() {
    return (
        <footer>
            <div className='footer-conteudo'>
                <div className='botoes'>
                    <a className='btn' href={curriculo_eng} download>
                        <FontAwesomeIcon icon={faScroll} className='icone'/>
                        Download my resume
                    </a>
                    <Link className='btn' to='banner' smooth={true} duration={1000}>
                        <FontAwesomeIcon icon={faArrowUp} className='icone'/>
                        Return to top
                    </Link>
                </div>
                <p>Renan Arantes Lima - 2022 &copy; All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;