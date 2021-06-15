import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

import curriculo from '../../files/curriculo-renan-lima.docx';

function Footer() {
    return (
        <footer>
            <div className='footer-conteudo'>
                <div className='botoes'>
                    <a className='btn' href={curriculo} download>
                        <FontAwesomeIcon icon={faScroll} className='icone'/>
                        Conheça meu currículo
                    </a>
                    <Link className='btn' to='home' smooth={true} duration={1000}>
                        <FontAwesomeIcon icon={faArrowUp} className='icone'/>
                        Voltar ao topo
                    </Link>
                </div>
                <p>Renan Arantes Lima - 2021 &copy; Todos os Direitos Reservados</p>
            </div>
        </footer>
    );
}

export default Footer;