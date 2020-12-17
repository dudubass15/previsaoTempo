import React from 'react';
import './search.css';

function Search(props) {
    return(
        <>
            <div className="search d-flex flex-column align-items-center">
                <label className="fs-1 fw-bold mb-3">{props.title}</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control rounded-1 border-0" placeholder={props.placeholder} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button className="btn btn-primary outline-none box-shadow-none pe-3 ps-3">Buscar</button>
                </div>
            </div>
        </>
    );
}

export default Search;