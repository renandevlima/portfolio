import React from 'react';
import './Banner.css';
import renan from '../../img/renan.png';
import curriculo from '../../files/curriculo-renan-lima.docx';
import curriculo_eng from '../../files/curriculo-renan-lima-eng.docx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

function Banner() {
    return (
        <section className='banner-inicial'>
            <div className='banner-conteudo'>
                <div className='texto'>
                    <h1>Olá! Sou Renan Arantes Lima e este é meu portfólio.</h1>
                    <h3>Programador Web Senior, Programador Frontend Senior, Programador Full-Stack</h3>
                    <a className='curriculo' href={curriculo} download>
                        <FontAwesomeIcon icon={faScroll} className='icone'/>
                        Conheça meu currículo
                    </a>
                    <a className='curriculo eng' href={curriculo_eng} download>
                        <FontAwesomeIcon icon={faScroll} className='icone'/>
                        Download my resume
                    </a>
                </div>
                <img src={renan} alt='Foto Renan'/>
            </div>
        </section>
    );
}

export default Banner;