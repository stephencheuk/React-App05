import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link,
//  Switch,
} from 'react-router-dom'

import App from './containers/App';

import About from './components/About';
import AboutA1 from './components/About/AboutA1';
import Home from './components/Home';
import TodoApp from './components/Todo';

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class MyRoute extends Component {
  render(){
    return (
      <Router history={history}>
        <div>
          <App />

          <div className='SideBar'>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/todo">Todo</Link></li>
            </ul>
          </div>

          <div className='Container'>
            <Route path="/home" component={Home}/>
            <Route path="/about" render={() => (
              <div>
                <h1>About Title</h1>
                <Route exact path="/about" component={About}/>
                <Route path="/about/AboutA1" component={AboutA1}/>
              </div>
            )}/>
            <Route path="/todo" component={TodoApp} />
          </div>

        </div>
      </Router>
    );
  }
}

/*
            <Route exact path="*" render={function (){
              return <p>Not Found</p>
            }}/>

*/

export default MyRoute;