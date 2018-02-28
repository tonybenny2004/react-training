import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LeftNav from '../navigation/left-nav';
import About from '../pages/about';
import Home from '../pages/home';
import Product from '../pages/products';
import Movies from '../../containers/movies';


const LayoutComponent = () => (
  <div className="container">
    <Router>
      <div className="row">
        <div className="col-md-3">
          <h3>Left Nav</h3>
          <LeftNav />
        </div>
        <div className="col-md-9">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/products' component={Product} />
            <Route exact path='/movies' component={Movies} />
         </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default LayoutComponent;
