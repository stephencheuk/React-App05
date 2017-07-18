import React from 'react';
import ReactDOM from 'react-dom';
//import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
 
import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import todoApp from './components/Todo/reducers'
//import todos from './components/Todo/reducers/todos'
//import visibilityFilter from './components/Todo/reducers/visibilityFilter'

import {
//  BrowserRouter as Router,
//  Route,
//  Link,
//  Switch,
} from 'react-router-dom'

//import About from './components/About';
//import AboutA1 from './components/About/AboutA1';
//import Home from './components/Home';
//import TodoApp from './components/Todo';
//import AsyncLoader from './utils/AsyncLoader';
//import CompLoader from './utils/CompLoader';

//Basic Usage with Predefined Route
//import myRoute from './routes';
//Use Switch with Predefined Route
//import myRoute from './Routes_Test1';
//Use Router with Predefined Route
//import MyRoute from './routes_Router';
//Use with Switch on MyRoute
//import MyRoute from './Routes_Switch';
//Use with Render
//import MyRoute from './Routes_Render';
//Login & Logout
import MyRoute from './Routes_LoginLogout';

//import createHistory from 'history/createBrowserHistory'
//const history = createHistory()

//let store = createStore(todoApp)
import createStore from './store'

ReactDOM.render(
  <Provider store={createStore()}>
    <MyRoute />
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
