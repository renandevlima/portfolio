import React from 'react';
import './Sobre.css';
import avatar from '../../img/avatar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faLanguage } from '@fortawesome/free-solid-svg-icons';

function Sobre() {
    return (
        <section className='sobre'>
            <div className='sobre-conteudo' id='sobre'>
                <img src={avatar} alt='Avatar Renan'/>
                <div className='texto'>
                    <h2>Sobre mim</h2>
                    <p>
                        Meu nome é Renan Arantes Lima, tenho 24 anos, com mais de 3 anos de experiência como programador, e atualmente trabalho na Adias Ar Condicionado como Programador FrontEnd Sr. onde desenvolvo aplicações em react fazendo desde a parte de diagramação, consumo de APIs, controle de rotas e gerenciamento de estados. Sou formado em Análise e Desenvolvimento de Sistema, que concluí em junho de 2021 na Estácio. E atualmente moro em São Paulo - SP.
                    </p>
                    <p><strong><FontAwesomeIcon icon={faBriefcase} /> Ocupação atual: </strong> Programador FrontEnd Sr em Adias Ar Condicionado – Desde 10/2021</p>
                    <p><strong><FontAwesomeIcon icon={faGraduationCap} /> Formação Acadêmica: </strong> Análise e Desenvolvimento de Sistemas – De 01/2019 a 06/2021</p>
                    <p><strong><FontAwesomeIcon icon={faLanguage} /> Outros idiomas: </strong> Inglês - Avançado</p>
                </div>
            </div>
        </section>
    );
}

export default Sobre;