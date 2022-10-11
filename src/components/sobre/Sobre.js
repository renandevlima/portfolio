import React from 'react';
import './Sobre.css';
import avatar from '../../img/avatar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Sobre() {
    return (
        <section className='sobre'>
            <div className='sobre-conteudo' id='sobre'>
                <img src={avatar} alt='Avatar Renan' />
                <div className='texto'>
                    <h2>About me</h2>
                    <p>
                        I currently work as SR Frontend Developer at Meta developing the Urbia Parks website and Iphone and Android App using Next JS, React and React Native. I always try to use language patterns in my codes and version as best I can using GIT and Git Flow principles. I usually work with agile methodologies, using Jira and Trello to organize my projects, along with Bit Bucket branches.
                    </p>
                    <p><strong><FontAwesomeIcon icon={faBriefcase} /> Current Position: </strong> SR Frontend Developer at Meta – Since 02/2022</p>
                    <p><strong><FontAwesomeIcon icon={faGraduationCap} /> Academic formation: </strong> Systems analysis and development – De 01/2019 a 06/2021</p>
                </div>
            </div>
        </section>
    );
}

export default Sobre;