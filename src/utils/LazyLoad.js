import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class LazyLoad extends Component {
  state = {
    AsyncModule : null
  };

  componentDidMount(){
    console.log('LazyLoad', this.props);
    this.props.getComponent()
      .then(module => module = module.default)
      .then(AsyncModule => {
        this.setState({AsyncModule : AsyncModule})
      })
  }

  render() {
    const { loader, getComponent, ...childProps } = this.props;
    //const { AsyncModule } = this.props;
    const { AsyncModule } = this.state;

    if(AsyncModule){
      return (<AsyncModule {...childProps} />)
    }

    if(loader){
      const Loader = loader;
      return <Loader/>
    }

    return null;
  }

}

//LazyLoad.propTypes = {
//  getComponent: PropTypes.func.isRequired,
//};

export default LazyLoad;