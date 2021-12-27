import React, { useState } from 'react';
import './Experiencia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBriefcase, faCog, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import fcl from '../../img/fcl.png';
import bravo from '../../img/bravo.png';
import prestus from '../../img/prestus-logo.png';
import zarpo from '../../img/zarpo.png';
import proa from '../../img/proa.svg';
import adias from '../../img/adias.png';

function Experiencia() {
    const [hidden, setHidden] = useState(true);

    return (
        <section className='experiencia'>
            <div className='experiencia-conteudo' id='experiencia'>
                <h2>Experiências Profissionais</h2>
                <div className='expe'>
                    <a className='expe-img proa' target='_blank' rel='noreferrer' href='https://www.adias.com.br/'>
                        <img src={adias} alt='Adias Ar Condicionado' />
                    </a>
                    <div className='expe-texto'>
                        <h4>Adias Ar Condicionado</h4>
                        <p><strong><FontAwesomeIcon icon={faBriefcase} /> Cargo: </strong>Programador FrontEnd Sr.</p>
                        <p><strong><FontAwesomeIcon icon={faClock} /> Tempo de atuação: </strong>De Outubro de 2021 até atualmente</p>
                        <p><strong><FontAwesomeIcon icon={faCog} /> Funções exercidas: </strong>Desenvolver aplicações em react fazendo desde a parte de diagramação, consumo de APIs, controle de rotas e gerenciamento de estados.</p>
                    </div>
                </div>
                <div className='expe'>
                    <a className='expe-img proa' target='_blank' rel='noreferrer' href='https://www.proa.org.br/'>
                        <img src={proa} alt='Instituto PROA' />
                    </a>
                    <div className='expe-texto'>
                        <h4>Instituto PROA</h4>
                        <p><strong><FontAwesomeIcon icon={faBriefcase} /> Cargo: </strong>Líder Técnico de Desenvolvimento de Software</p>
                        <p><strong><FontAwesomeIcon icon={faClock} /> Tempo de atuação: </strong>De Junho de 2021 até Outubro de 2021</p>
                        <p><strong><FontAwesomeIcon icon={faCog} /> Funções exercidas: </strong>Executar manutenção no sistema de ensino a distancia em Moodle, desenvolvendo novas tecnologias para o instituto e coordenando atividades relacionadas a Desenvolvimento.</p>
                    </div>
                </div>
                <div hidden={hidden}>
                    <div className='expe'>
                        <a className='expe-img' target='_blank' rel='noreferrer' href='https://fcl.com.br/'>
                            <img src={fcl} alt='Fundação Cásper Líbero' />
                        </a>
                        <div className='expe-texto'>
                            <h4>Fundação Cásper Líbero</h4>
                            <p><strong><FontAwesomeIcon icon={faBriefcase} /> Cargo: </strong>Programdor de Sistemas SR.</p>
                            <p><strong><FontAwesomeIcon icon={faClock} /> Tempo de atuação: </strong>De Maio de 2020 até Junho de 2021</p>
                            <p><strong><FontAwesomeIcon icon={faCog} /> Funções exercidas: </strong>Criação e manutenção de temas e plugins de Wordpress. Verificar Google Search console e elaborar soluções para erros encontrados nos sites da Fundação. Elaboração de estratégias de otimização de desempenho de sites.</p>
                        </div>
                    </div>
                    <div className='expe'>
                        <a className='expe-img' target='_blank' rel='noreferrer' href='https://www.bravocorp.com.br/'>
                            <img src={bravo} alt='Bravo - Projects and OutSourcing' />
                        </a>
                        <div className='expe-texto'>
                            <h4>Bravo - Projects and OutSourcing</h4>
                            <p><strong><FontAwesomeIcon icon={faBriefcase} /> Cargo: </strong>Programdor de Sistemas JR.</p>
                            <p><strong><FontAwesomeIcon icon={faClock} /> Tempo de atuação: </strong>De Fevereiro de 2020 até Maio de 2020</p>
                            <p><strong><FontAwesomeIcon icon={faCog} /> Funções exercidas: </strong>Criação de sistemas fiscais para clientes externos. Integração de Sistemas utilizando frontend e APIs em Laravel.</p>
                        </div>
                    </div>
                    <div className='expe'>
                        <a className='expe-img' target='_blank' rel='noreferrer' href='https://www.prestus.com.br/'>
                            <img src={prestus} alt='Prestus - Secretárias Compartilhadas' />
                        </a>
                        <div className='expe-texto'>
                            <h4>Prestus - Secretárias Compartilhadas</h4>
                            <p><strong><FontAwesomeIcon icon={faBriefcase} /> Cargo: </strong>Programdor PHP</p>
                            <p><strong><FontAwesomeIcon icon={faClock} /> Tempo de atuação: </strong>De Setembro de 2019 até Fevereiro de 2020</p>
                            <p><strong><FontAwesomeIcon icon={faCog} /> Funções exercidas: </strong>Criação e manutenção de sistemas internos e externos em PHP. Criação e integração de APIs utilizando framework próprio em PHP. Criação do WebSite da empresa utilizando tema prórpio em Wordpress.</p>
                        </div>
                    </div>
                    <div className='expe'>
                        <a className='expe-img' target='_blank' rel='noreferrer' href='https://www.zarpo.com.br/'>
                            <img src={zarpo} alt='Zarpo Viagens' />
                        </a>
                        <div className='expe-texto'>
                            <h4>Zarpo Viagens</h4>
                            <p><strong><FontAwesomeIcon icon={faBriefcase} /> Cargo: </strong>Estagiário</p>
                            <p><strong><FontAwesomeIcon icon={faClock} /> Tempo de atuação: </strong>De Janeiro de 2019 até Setembro de 2019</p>
                            <p><strong><FontAwesomeIcon icon={faCog} /> Funções exercidas: </strong>Manutenção de computadores da Empresa. Criação de soluções de suporte e Help Desk. Manutenção no frontend do website da empresa.</p>
                        </div>
                    </div>
                </div>
                <button className='show-more' onClick={() => setHidden(!hidden)}>
                    {hidden ?  
                    <span><FontAwesomeIcon icon={faPlus} className='icon'/>Mostrar Mais</span> : 
                    <span><FontAwesomeIcon icon={faMinus} className='icon'/>Mostrar Menos</span>}
                </button>
            </div>
        </section>
    );
}

export default Experiencia;