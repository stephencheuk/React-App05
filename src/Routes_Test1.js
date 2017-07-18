import React from 'react'
//import PropTypes from 'prop-types'
import {
//  BrowserRouter as Router,
  Route,
//  Link,
  Switch,
} from 'react-router-dom'

import About from './components/About';
import AboutA1 from './components/About/AboutA1';
import Home from './components/Home';

const myRoute = () => {
  return (
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
  );
}

export default myRoute;