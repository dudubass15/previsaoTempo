import React from 'react';
import './home.css';

function Home() {
    return(
        <>
            <div className="w-100 banner bg-blue-dark">
                <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="search d-flex flex-column align-items-center">
                        <label className="fs-1 fw-bold mb-3">Previsão do Tempo</label>
                        <input type="text" className="form-control rounded-1 border-0" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;