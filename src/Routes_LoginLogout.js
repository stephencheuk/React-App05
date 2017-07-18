import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
//  Link,
  Redirect,
//  Switch,
  NavLink,
} from 'react-router-dom'

import App from './containers/App';

import AboutApp from './components/About/';
import AboutA1 from './components/About/AboutA1';
import Home from './components/Home';
//import TodoApp from './components/Todo';
import Auth from './components/Auth';
//import AsyncLoader from './utils/AsyncLoader';
import LazyLoad from './utils/LazyLoad';
import asyncRoute from './utils/asyncRoute';

import createHistory from 'history/createBrowserHistory'
const history = createHistory();

class MyRoute extends Component {

  constructor(props){
    super(props);
    this.state = {
      'header': 'Home'
    };
  }

  setHeader(header){
    this.setState({
      'header': header,
    })
  }

  render(){
    let user = '';
    if(this.state){
      user = this.state.user;
    }
    return (
      <Router history={history}>
        <div>
          <App />

          <div className='SideBar'>
            <ul>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/todo">Todo</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/contacts">Contacts</NavLink></li>
            </ul>
          </div>

          <div className='Container'>
            <h1>{this.state.header}</h1>
            <Route path="/login" render={
              () => (
                user ?
                  <Redirect to="/home"/> : 
                  <Auth/>
              )
            }/>
            <Route path="/home" component={Home}/>
            <Route path="/about" render={() => (
              <div>
                <h1>About Title</h1>
                <Route exact path="/about" component={AboutApp}/>
                <Route path="/about/AboutA1" component={AboutA1} history={history}/>
              </div>
            )}/>

            <Route path="/contacts_without_reducers" component={ asyncRoute( () => import('./components/Contacts') ) } data={[{'id':1}, {'id':2}]} />

            <Route path="/contacts" component={
              asyncRoute( () => import('./components/Contacts'),
                          () => import('./components/Contacts/reducers')
                )
            }/>

            <Route path="/todo" render={ ()  => {
                return <LazyLoad
                          loader = {
                                   ()=>(<div>Loading</div>)
                                  }
                          getComponent = {
                                   () => import('./components/Todo')
                                  }
                          todolist = {
                                      [
                                        { 'id' : 1, 'text' : '111', 'completed' : false },
                                        { 'id' : 2, 'text' : '222', 'completed' : true },
                                        { 'id' : 3, 'text' : '333', 'completed' : false },
                                        { 'id' : 4, 'text' : '444', 'completed' : true },
                                        { 'id' : 5, 'text' : '555', 'completed' : false }
                                      ]
                                    }
                       />
              }
            } />
            <Route path="/todo2" render={ ()  => {
                //if(!TodoApp){
                if(!this.Component){
                  import('./components/Todo').then( m => {
                    this.Component = m
                    this.forceUpdate();
                  });
                }
                return this.Component ? <this.Component.default /> : null
              }
             } />
          </div>

        </div>
      </Router>
    );
  }
}

/*
            <Route path="/todo" component={TodoApp} />
            <Route exact path="*" render={function (){
              return <p>Not Found</p>
            }}/>

*/

export default MyRoute;