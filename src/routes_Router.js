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
            { /*
                exact means exactly match the url of route
                on the other hand, /about page w/o exact
                can be as a outer page of sub page
            */}
            <Route path="/about" component={About}/>
            <Route path="/about/aboutA1" component={AboutA1}/>
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