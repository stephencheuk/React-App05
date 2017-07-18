import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class CompLoader extends Component {
  render() {
    return (
      <Route
        path={this.props.path}
        getComponent={(location, callback) => {
          import(this.props.component)
            .then((component) => {
              callback(null, component.default || component);
            });
          }
        }
      />
    )
  }
}

export default CompLoader;