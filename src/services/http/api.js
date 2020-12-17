import React from 'react';
import axios from 'axios';

export default {

    getInfo(cidade) {
        axios({
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/forecast?q='+cidade+'&appid=2631155b530f7548a76c356d0ba307f9'
        })
        .then(r => {
            console.log(r)
        })
        .catch(error => {
            console.log(error)
        });
    }

};