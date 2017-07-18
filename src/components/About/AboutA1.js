import React, { Component } from 'react';

class AboutA1 extends Component {
  GoRoot = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        About A1
        <button onClick={this.GoRoot}>Go Root</button>
      </div>
    );
  }
}

export default AboutA1;
