import React from 'react';
import "./Sobre.css";
import avatar from "../../img/avatar.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faLanguage } from '@fortawesome/free-solid-svg-icons';

function Sobre() {
    return (
        <section className="sobre">
            <div className="sobre-conteudo">
                <img src={avatar} alt="Avatar Renan"/>
                <div className="texto">
                    <h2>Sobre mim</h2>
                    <p>
                        Meu nome é Renan Arantes Lima, tenho 23 anos, com mais de 3 anos de experiência como programador, e atualmente trabalho na Fundação Cásper Líbero como Programador de Sistemas SR. desenvolvendo e dando manutenção em temas e plugins do Wordpress com foco no frontend. Sou formado em Análise e Desenvolvimento de Sistema, que concluí em junho de 2021 na Estácio. E atualmente moro em São Paulo - SP.
                    </p>
                    <p><strong><FontAwesomeIcon icon={faBriefcase} /> Ocupação atual: </strong> Programador de Sistemas SR. em Fundação Cásper Líbero – Desde 05/2020</p>
                    <p><strong><FontAwesomeIcon icon={faGraduationCap} /> Formação Acadêmica: </strong> Análise e Desenvolvimento de Sistemas – De 01/2019 a 06/2021</p>
                    <p><strong><FontAwesomeIcon icon={faLanguage} /> Outros idiomas: </strong> Inglês - Avançado</p>
                </div>
            </div>
        </section>
    );
}

export default Sobre;