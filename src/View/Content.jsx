import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Home';
import AuthOrApp from './authOrApp';
import CadProduto from './CadProduto';
import Header from './../Containers/Header';

const Content = (props) => {
    return (
        <div className="App">
            <Header />
            <Router>
                <div>
                    <Switch>
                        <Route path="/produto">
                            <CadProduto />
                        </Route>
                        <Route path="/teste">
                            <Home />
                        </Route>
                        <Route path="/">
                            <AuthOrApp />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Content;