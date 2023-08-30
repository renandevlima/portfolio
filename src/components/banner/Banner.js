import React from 'react';
import './Banner.css';
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
                <iframe width="760" height="410" className='youtube' src="https://www.youtube.com/embed/wYtGfh1omso?si=3W1d3RLrloqJ7nyN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </section>
    );
}

export default Banner;