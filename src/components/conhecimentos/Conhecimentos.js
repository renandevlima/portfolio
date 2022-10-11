import React, {useState} from 'react';
import './Conhecimentos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faAngular, faPhp, faLaravel, faWordpress, faMagento, faJava, faPython, faGitAlt, faDocker} from '@fortawesome/free-brands-svg-icons';

function Conhecimentos() {
    const [showFront, setShowFront] = useState(false);
    const [showBack, setShowBack] = useState(false);
    const [showData, setShowData] = useState(false);
    const [showTool, setShowTool] = useState(false);

    return (
        <section className='conhecimentos'>
            <div className='conhecimentos-conteudo' id='conhecimentos'>
                <h2>Knowledge</h2>
                <div className='box-conhecimento'>
                    <button className='show-conhecimento' onClick={() => setShowFront(!showFront)}><FontAwesomeIcon icon={faHtml5} className='icone'/>FrontEnd</button>
                    <button className='show-conhecimento' onClick={() => setShowBack(!showBack)}><FontAwesomeIcon icon={faPhp} className='icone'/>BackEnd</button>
                    <button className='show-conhecimento' onClick={() => setShowData(!showData)}><FontAwesomeIcon icon={faDatabase} className='icone'/> Database</button>
                    <button className='show-conhecimento' onClick={() => setShowTool(!showTool)}><FontAwesomeIcon icon={faTools} className='icone'/> Tools</button>
                </div>
                <ul className='lista-conhecimentos'>
                    { showFront && <React.Fragment>
                    <li className='conhecimento'><FontAwesomeIcon icon={faHtml5} className='icone'/> HTML</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faCss3Alt} className='icone'/> CSS</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faCss3Alt} className='icone'/> Bootstrap</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faCss3Alt} className='icone'/> FlexBox</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faJs} className='icone'/> JavaScript</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faJs} className='icone'/> TypeScript</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faJs} className='icone'/> Jquery</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> NextJS</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> React</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> Redux</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> Redux Tools</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> Redux Saga</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> React Native</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faReact} className='icone'/> Context API</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faVuejs} className='icone'/> Vue</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faVuejs} className='icone'/> Vuex</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faAngular} className='icone'/> Angular</li>
                    </React.Fragment> }
                    { showBack && <React.Fragment>
                    <li className='conhecimento'><FontAwesomeIcon icon={faPhp} className='icone'/> PHP</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faPhp} className='icone'/> Node.JS</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faPhp} className='icone'/> CodeIgniter</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faLaravel} className='icone'/> Laravel</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faWordpress} className='icone'/> Wordpress</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faMagento} className='icone'/> Magento</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faJava} className='icone'/> Java</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faPython} className='icone'/> Python</li>
                    </React.Fragment> }
                    { showData && <React.Fragment>
                    <li className='conhecimento'><FontAwesomeIcon icon={faDatabase} className='icone'/> MySQL</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faDatabase} className='icone'/> PostgreSQL</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faDatabase} className='icone'/> Mongo DB</li>
                    </React.Fragment> }
                    { showTool && <React.Fragment>
                    <li className='conhecimento'><FontAwesomeIcon icon={faGitAlt} className='icone'/> Git</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faGitAlt} className='icone'/> GitHub</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faGitAlt} className='icone'/> BitBucket</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faGitAlt} className='icone'/> Firebase</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faDocker} className='icone'/> Docker</li>
                    <li className='conhecimento'><FontAwesomeIcon icon={faDocker} className='icone'/> AWS</li>
                    </React.Fragment> }
                </ul>
            </div>
        </section>
    );
}

export default Conhecimentos;