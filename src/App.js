import React from 'react';
import Content from './View/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CadProduto from './View/CadProduto/CadProduto';
import Produtos from './View/Produtos/Produtos';
import Home from './View/Home/Home';

const App = props => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/cadproduto" component={CadProduto} />
          <Route exact path="/produtos/:type" component={Produtos} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Content} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;