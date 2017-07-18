import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './components/Todo/reducers'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import About from './components/About';
import AboutA1 from './components/About/AboutA1';
import Home from './components/Home';
//import TodoApp from './components/Todo';
//import AsyncLoader from './utils/AsyncLoader';
//import CompLoader from './utils/CompLoader';

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />

        <div className='SideBar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>
        </div>

        <div className='Container'>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/about/aboutA1" component={AboutA1}/>
            {/*
              render={()=><AsyncLoader path={'./components/Todo.js'}/>}
            */}
            {/*
            <Route exact path="/todo" component={TodoApp} />
            */}
            {/*
            <CompLoader exact path="/todo" component="./components/Todo.js" />
            */}
            <Route exact path="/todo" getComponent={
              (nextState, cb) => {
                console.log(nextState, cb);
                require.ensure([], (require) => {
                  cb(null, require('./components/Todo'));
                }, '/todo')
              }
            } />
            <Route path="*" render={function (){
              return <p>Not Found</p>
            }}/>
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
