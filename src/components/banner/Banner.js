import React from 'react';
import './Banner.css';
import renan from '../../img/renan.png';
import curriculo_eng from '../../files/renan_lima_resume.docx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

function Banner() {
    return (
        <section className='banner-inicial'>
            <div className='banner-conteudo' id="banner">
                <div className='texto'>
                    <h1>Hello! I am Renan Lima and here is my portfolio.</h1>
                    <h3>Senior Web Developer, Senior Frontend Developer, Full-Stack Developer</h3>
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