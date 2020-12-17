import React from 'react';
import './home.css';
import Search from './components/search/search';
import Card from '../../components/card/card';

// Services
import api from '../../services/http/api.js';

function Home() {

    // let param = api.getInfo();

    // console.log(param);

    return(
        <>
            <div className="w-100 banner bg-blue-dark">
                <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
                    <Search title="Previsão do Tempo" placeholder="Digite o nome da sua cidade" />
                </div>
            </div>

            <div className="container pt-5 pb-5">
                <Card />
            </div>
        </>
    );
}

export default Home;