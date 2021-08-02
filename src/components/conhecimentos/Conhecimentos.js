import React from 'react';
import './Conhecimentos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faAngular, faPhp, faLaravel, faWordpress, faMagento, faJava, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';

function Conhecimentos() {
    return (
        <section className='conhecimentos'>
            <div className='conhecimentos-conteudo' id='conhecimentos'>
                <h2>Meus Conhecimentos</h2>
                <ul className='lista-conhecimentos'>
                    <li className='conhecimento'><FontAwesomeIcon icon={faHtml5} className='icone'/> HTML</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faCss3Alt} className='icone'/> CSS</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faCss3Alt} className='icone'/> Bootstrap</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faCss3Alt} className='icone'/> FlexBox</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faJs} className='icone'/> JavaScript</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faJs} className='icone'/> TypeScript</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faJs} className='icone'/> Jquery</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> React</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> Redux</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> React Native</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faVuejs} className='icone'/> Vue</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faVuejs} className='icone'/> Vuex</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faAngular} className='icone'/> Angular</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faPhp} className='icone'/> PHP</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faPhp} className='icone'/> CodeIgniter</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faLaravel} className='icone'/> Laravel</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faWordpress} className='icone'/> Wordpress</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faMagento} className='icone'/> Magento</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faJava} className='icone'/> Java</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faPython} className='icone'/> Python</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faDatabase} className='icone'/> MySQL</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faDatabase} className='icone'/> PostgreSQL</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faDatabase} className='icone'/> Mongo DB</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faGitAlt} className='icone'/> Git</li>
                </ul>
            </div>
        </section>
    );
}

export default Conhecimentos;