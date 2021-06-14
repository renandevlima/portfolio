import React from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Sobre from './components/sobre/Sobre';
import Conhecimentos from './components/conhecimentos/Conhecimentos';
import Freelances from './components/freelances/Freelances';
import Experiencia from './components/experiencia/Experiencia';

function App() {
    return (
        <div id="App">
            <Header/>
            <Banner/>
            <Sobre/>
            <Conhecimentos/>
            <Freelances/>
            <Experiencia/>
        </div>
    );
}

export default App;