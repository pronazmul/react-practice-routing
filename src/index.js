import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './components/About';
import Contract from './components/Contract';
import Service from './components/Service';
import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom';

const myRouter=(
  <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Ract Basic Routing</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                  <ul className="navbar-nav d-block ml-auto d-flex pr-4">
                    <li className="nav-item"><Link className='nav-link' to='/'>Home</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='/about'>About</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='/contract'>Contract</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='/service'>Service</Link></li>
                </ul>
          </div>
        </nav>
          <Route exact path='/' component={App} />
          <Route path='/about' component={About} />
          <Route path='/contract' component={Contract} />
          <Route path='/service' component={Service} />
      </div>
  </Router>
)

ReactDOM.render(
  myRouter,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
