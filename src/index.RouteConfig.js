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
  Link
} from 'react-router-dom'

import About from './components/About';
import AboutA1 from './components/About/AboutA1';
import Home from './components/Home';
import TodoApp from './components/Todo';

const routes = [
  { path: '/',
    component: Home,
    exact: true,
  },
  { path: '/Home',
    component: Home,
  },
  { path: '/about',
    component: About,
    routes: [
      { path: '/about/a1',
        component: AboutA1
      }
    ]
  },
  { path: '/todo',
    component: TodoApp,
  }
//  ,
//  { path: '/tacos',
//    component: Tacos,
//    routes: [
//      { path: '/tacos/bus',
//        component: Bus
//      },
//      { path: '/tacos/cart',
//        component: Cart
//      }
//    ]
//  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
);

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />

        <div className='SideBar'>
          <ul>
            <li><ActiveLink activeOnlyWhenExact to="/" label="Home" /></li>
            <li><ActiveLink activeOnlyWhenExact to="/about" label="About" /></li>
            <li><ActiveLink activeOnlyWhenExact to="/todo" label="Todo" /></li>
          </ul>
        </div>

        <div className='Container'>
          {
            routes.map(
              (route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              )
            )
          }
        </div>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
