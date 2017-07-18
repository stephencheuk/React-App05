import React, { Component } from 'react';
//import PropTypes from 'prop-types'

import {
//  BrowserRouter as Router,
//  Route,
  Link,
} from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>
        <div>======= START =======</div>
        <h2>About Page</h2>
        <p><Link to="/about/AboutA1">A1</Link></p>
        <p><Link to="/NotFound">Not Found</Link></p>
        <div>======= END =======</div>
      </div>
    );
  }
}

//About.propTypes = {
//  children: PropTypes.string.isRequired
//}


export default About;
