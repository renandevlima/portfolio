import React from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Sobre from './components/sobre/Sobre';
import Conhecimentos from './components/conhecimentos/Conhecimentos';
import Freelances from './components/freelances/Freelances';
import Experiencia from './components/experiencia/Experiencia';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div id='App'>
            <Header/>
            <Banner/>
            <Sobre/>
            <Conhecimentos/>
            <Freelances/>
            <Experiencia/>
            <Contato/>
            <Footer/>
        </div>
    );
}

export default App;