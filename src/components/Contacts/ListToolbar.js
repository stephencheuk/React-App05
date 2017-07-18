import React, { Component } from 'react'
//import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setSearchFilter } from './actions'


class ListToolbar extends Component {

  state = {
    filter: '123'
  };

  render(){
    console.log('ListToolbar', this.props);
    return (
        <p>
          Search:
          {" "}
          <input value={ this.props.filter } onChange={ (e)=>this.props.on.filter(e.target.value) } />
          <input value={ this.state.filter } onBlur={this.props.setSearchFilter} />
        </p>
      )
  }

}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    'contacts' : state.contacts
  };
}

const mapDispatchToProps = (dispatch, ownProps = {}) => {
  return bindActionCreators({
    setSearchFilter : setSearchFilter
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ListToolbar);
