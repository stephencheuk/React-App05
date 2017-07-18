import React, { Component } from 'react';

class Home extends Component {

  constructor(props){
    super(props);
    console.log(props);
    let { parent } = props;
    if(parent){
      parent.setHeader('Home');
    }
  }

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

export default Home;
