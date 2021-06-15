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
                    <h2>Entre em contato</h2>
                    <p><strong><FontAwesomeIcon icon={faMobileAlt} /> Telefone: </strong>(11) 95836-3777 | (11) 95834-45222 - Recado</p>
                    <p><strong><FontAwesomeIcon icon={faEnvelope} /> E-mail: </strong><a href='mailto:renan.arantes123@gmail.com'>renan.arantes123@gmail.com</a></p>
                    <p><strong><FontAwesomeIcon icon={faHome} /> Residencia: </strong>São Paulo - SP (próximo a linha 3 do metrô, região da Penha)</p>
                    <a href='https://api.whatsapp.com/send?phone=5511958363777' className='whatsapp-btn' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='icone'/> Conversar pelo Whatsapp</a>
                </div>
            </div>
        </section>
    );
}

export default Contato;