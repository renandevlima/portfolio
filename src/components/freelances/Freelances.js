import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Freelances.css';

import citygreen from '../../img/citygreen.png';
import dozeroaosenior from '../../img/dozeroaosenior.png';
import grupo_era from '../../img/grupo-era.png';
import jdr from '../../img/jdr.png';
import prestus from '../../img/prestus.png';
import psicanna from '../../img/psicanna.png';
import ragione from '../../img/ragione.png';
import vertara from '../../img/vertara.png';

class Freelances extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 786,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }
            ]
        };
        return (
            <section className='freelances'>
                <div className='freelances-conteudo' id='freelances'>
                    <h2>Freelances que realizei</h2>
                    <Slider {...settings}>
                        <a href='https://citygreen.com/' target='_blank' rel='noreferrer'>
                            <img className='free' src={citygreen}  alt='Citygreen'/>
                        </a>
                        <a href='https://www.dozeroaosenior.com.br/' target='_blank' rel='noreferrer'>
                            <img className='free' src={dozeroaosenior} alt='Do Zero Ao Senior' />
                        </a>
                        <a href='https://www.dentistasgrupoera.com.br/dentista-tatuape/' target='_blank'  rel='noreferrer'>
                            <img className='free' src={grupo_era} alt='Grupo Era Dentistas' />
                        </a>
                        <a href='http://jdrcont.com.br/' target='_blank' rel='noreferrer'>
                            <img className='free' src={jdr} alt='JDR Cont' />
                        </a>
                        <a href='https://www.prestus.com.br/' target='_blank' rel='noreferrer'>
                            <img className='free' src={prestus} alt='Prestus' />
                        </a>
                        <a href='http://www.psicanna.com.br/' target='_blank' rel='noreferrer'>
                            <img className='free' src={psicanna} alt='Psicanna' />
                        </a>
                        <a href='https://ragioneengenharia.com.br/' target='_blank' rel='noreferrer'>
                            <img className='free' src={ragione} alt='Ragione' />
                        </a>
                        <a href='https://www.vertara.com/' target='_blank' rel='noreferrer'>
                            <img className='free' src={vertara} alt='Vertara'/>
                        </a>
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Freelances;