import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/home/home';
import Sobre from '../pages/sobre/sobre';

export default function router() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact="/">
                    <Home />
                </Route>
                <Route path="/sobre" exact="/sobre">
                    <Sobre />
                </Route>
            </Switch>
        </Router>
    );
}