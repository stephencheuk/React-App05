import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';

//import {
//  BrowserRouter as Router,
//  Route,
//  Link
//} from 'react-router-dom'
//
//import About from '../components/About';
//import Home from '../components/Home';
//import TodoApp from '../components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        BAR
      </div>
    );
  }
}
//        <div className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h2>Welcome to React</h2>
//        </div>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
export default App;

//import React from 'react'
//import {
//  BrowserRouter as Router,
//  Route,
//  Link
//} from 'react-router-dom'
//
//const Home = () => (
//  <div>
//    <h2>Home</h2>
//  </div>
//)
//
//const About = () => (
//  <div>
//    <h2>About</h2>
//  </div>
//)
//
//const Topic = ({ match }) => (
//  <div>
//    <h3>{match.params.topicId}</h3>
//  </div>
//)
//
//const Topics = ({ match }) => (
//  <div>
//    <h2>Topics</h2>
//    <ul>
//      <li>
//        <Link to={`${match.url}/rendering`}>
//          Rendering with React
//        </Link>
//      </li>
//      <li>
//        <Link to={`${match.url}/components`}>
//          Components
//        </Link>
//      </li>
//      <li>
//        <Link to={`${match.url}/props-v-state`}>
//          Props v. State
//        </Link>
//      </li>
//    </ul>
//
//    <Route path={`${match.url}/:topicId`} component={Topic}/>
//    <Route exact path={match.url} render={() => (
//      <h3>Please select a topic.</h3>
//    )}/>
//  </div>
//)
//
//const App = () => (
//  <Router>
//    <div>
//      <ul>
//        <li><Link to="/">Home</Link></li>
//        <li><Link to="/about">About</Link></li>
//        <li><Link to="/topics">Topics</Link></li>
//      </ul>
//
//      <hr/>
//
//      <Route exact path="/" component={Home}/>
//      <Route path="/about" component={About}/>
//      <Route path="/topics" component={Topics}/>
//    </div>
//  </Router>
//)
//export default App