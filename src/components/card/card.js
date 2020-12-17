import React from 'react';
import './card.css';

function Card(props) {
    return(
        <>
            <div className="card shadow rounded-1 border-0 mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-auto pe-5">
                            <div className="temperature bg-marron rounded-1 d-flex justify-content-center align-items-center">
                                <p className="number color-marron-dark">17°C</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <h4 className="fs-4 fw-bold color-blue pt-4 mb-4">São Paulo, BR</h4>
                            <div className="w-100 d-flex flex-row mb-1">
                                <p className="text-muted pe-4 mb-0">Máx</p>
                                <p className="color-red mb-0">19.7°C</p>
                            </div>
                            <div className="w-100 d-flex flex-row mb-1">
                                <p className="text-muted pe-4 mb-0">Min</p>
                                <p className="color-blue ps-1 mb-0">13.3°C</p>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;