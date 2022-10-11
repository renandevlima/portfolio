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
import meta from '../../img/meta_logo.png';

function Experiencia() {
    const [hidden, setHidden] = useState(true);

    return (
        <section className='experiencia'>
            <div className='experiencia-conteudo' id='experiencia'>
                <h2>Professional Experience</h2>
                <div className='expe'>
                    <a className='expe-img proa' target='_blank' rel='noreferrer' href='https://www.meta.com.br/'>
                        <img src={meta} alt='Meta' />
                    </a>
                    <div className='expe-texto'>
                        <h4>Meta</h4>
                        <p><strong><FontAwesomeIcon icon={faBriefcase} /> Position: </strong>SR Frontend Developer</p>
                        <p><strong><FontAwesomeIcon icon={faClock} /> Operating time: </strong>Current since March 2022</p>
                        <p><strong><FontAwesomeIcon icon={faCog} /> Functions performed: </strong>Develop the Urbia Parks website using Next JS, React, Styled Components consuming REST and GRAPHQL API. Develop and control the app development using React Native, Redux, Styled Components using GraphQL and REST API </p>
                    </div>
                </div>
                <div className='expe'>
                    <a className='expe-img proa' target='_blank' rel='noreferrer' href='https://www.adias.com.br/'>
                        <img src={adias} alt='Adias Air Conditionate' />
                    </a>
                    <div className='expe-texto'>
                        <h4>Adias Air Conditionate</h4>
                        <p><strong><FontAwesomeIcon icon={faBriefcase} /> Position: </strong> SR Frontend Developer</p>
                        <p><strong><FontAwesomeIcon icon={faClock} /> Operating time: </strong>From October 2021 to March 2022</p>
                        <p><strong><FontAwesomeIcon icon={faCog} /> Functions performed: </strong>Develop applications in react, starting from diagramming, consuming APIs, controlling routes and managing states.</p>
                    </div>
                </div>
                <div hidden={hidden}>
                    <div className='expe'>
                        <a className='expe-img proa' target='_blank' rel='noreferrer' href='https://www.proa.org.br/'>
                            <img src={proa} alt='PROA Institute' />
                        </a>
                        <div className='expe-texto'>
                            <h4>PROA Institute</h4>
                            <p><strong><FontAwesomeIcon icon={faBriefcase} /> Position: </strong>Software Development Technical Leader</p>
                            <p><strong><FontAwesomeIcon icon={faClock} /> Operating time: </strong>From June 2021 to October 2021</p>
                            <p><strong><FontAwesomeIcon icon={faCog} /> Functions performed: </strong>Perform maintenance on the distance learning system in Moodle, developing new technologies for the institute and coordinating activities related to Development.</p>
                        </div>
                    </div>
                    <div className='expe'>
                        <a className='expe-img' target='_blank' rel='noreferrer' href='https://fcl.com.br/'>
                            <img src={fcl} alt='Cásper Líbero Foundation' />
                        </a>
                        <div className='expe-texto'>
                            <h4>Cásper Líbero Foundation</h4>
                            <p><strong><FontAwesomeIcon icon={faBriefcase} /> Position: </strong>SR Systems Developer</p>
                            <p><strong><FontAwesomeIcon icon={faClock} /> Operating time: </strong>From May 2020 to June 2021</p>
                            <p><strong><FontAwesomeIcon icon={faCog} /> Functions performed: </strong>Creation and maintenance of WordPress themes and plugins. Check Google Search console and devise solutions for errors found on the Foundation websites. Development of website performance optimization strategies.</p>
                        </div>
                    </div>
                    <div className='expe'>
                        <a className='expe-img' target='_blank' rel='noreferrer' href='https://www.bravocorp.com.br/'>
                            <img src={bravo} alt='Bravo - Projects and OutSourcing' />
                        </a>
                        <div className='expe-texto'>
                            <h4>Bravo - Projects and OutSourcing</h4>
                            <p><strong><FontAwesomeIcon icon={faBriefcase} /> Position: </strong>JR Software Developer</p>
                            <p><strong><FontAwesomeIcon icon={faClock} /> Operating time: </strong>From February 2020 to May 2020</p>
                            <p><strong><FontAwesomeIcon icon={faCog} /> Functions performed: </strong>Creation of tax systems for external customers. Systems Integration using Laravel frontend and APIs.</p>
                        </div>
                    </div>
                    <div className='expe'>
                        <a className='expe-img' target='_blank' rel='noreferrer' href='https://www.prestus.com.br/'>
                            <img src={prestus} alt='Prestus' />
                        </a>
                        <div className='expe-texto'>
                            <h4>Prestus</h4>
                            <p><strong><FontAwesomeIcon icon={faBriefcase} /> Position: </strong>PHP Developer</p>
                            <p><strong><FontAwesomeIcon icon={faClock} /> Operating time: </strong>From September 2019 to February 2020</p>
                            <p><strong><FontAwesomeIcon icon={faCog} /> Functions performed: </strong>Creation and maintenance of internal and external systems in PHP. Creation and integration of APIs using their own framework in PHP. Creation of the company's website using their own theme in WordPress.</p>
                        </div>
                    </div>
                    <div className='expe'>
                        <a className='expe-img' target='_blank' rel='noreferrer' href='https://www.zarpo.com.br/'>
                            <img src={zarpo} alt='Zarpo' />
                        </a>
                        <div className='expe-texto'>
                            <h4>Zarpo</h4>
                            <p><strong><FontAwesomeIcon icon={faBriefcase} /> Position: </strong>Internship in web support and development</p>
                            <p><strong><FontAwesomeIcon icon={faClock} /> Operating time: </strong>From January 2019 to September 2019</p>
                            <p><strong><FontAwesomeIcon icon={faCog} /> Functions performed: </strong>Site bug fixes, front-end changes, Magento back-end maintenance. Internal technical support of the company, call management, management of the company's asset park.</p>
                        </div>
                    </div>
                </div>
                <button className='show-more' onClick={() => setHidden(!hidden)}>
                    {hidden ?
                        <span><FontAwesomeIcon icon={faPlus} className='icon' />Show More</span> :
                        <span><FontAwesomeIcon icon={faMinus} className='icon' />Show Less</span>}
                </button>
            </div>
        </section>
    );
}

export default Experiencia;