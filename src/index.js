import React from 'react';
import ReactDOM from 'react-dom';
//import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import muiTheme from './index_material_ui_customize';

import './index.css';
import './index_material_ui_customize.css';

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

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={createStore()}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <MyRoute />
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
