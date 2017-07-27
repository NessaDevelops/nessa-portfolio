import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/404Page/404Page';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/404' component={NotFound} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes;
