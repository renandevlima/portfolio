import React from 'react';
import './Contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import contato from '../../img/contato.png'

function Contato() {
    return (
        <section className='contato'>
            <div className='contato-conteudo' id='contato'>
                <img src={contato} alt='Entre em contato comigo'/>
                <div className='texto'>
                    <h2>Contact</h2>
                    <p><strong><FontAwesomeIcon icon={faMobileAlt} /> Phone: </strong>+55 (11) 95836-3777 | +55 (11) 95834-45222</p>
                    <p><strong><FontAwesomeIcon icon={faEnvelope} /> E-mail: </strong><a href='mailto:renan.arantes123@gmail.com'>renan.arantes123@gmail.com</a></p>
                    <p><strong><FontAwesomeIcon icon={faHome} /> Residence: </strong>São Paulo - SP - Brazil</p>
                    <a href='https://api.whatsapp.com/send?phone=5511958363777' className='whatsapp-btn' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='icone'/> Get Contact by Whatsapp</a>
                </div>
            </div>
        </section>
    );
}

export default Contato;