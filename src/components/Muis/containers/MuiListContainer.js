import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import MuisList from '../components/MuisList'
import { fetchMuis, fetchMuisSuccess, fetchMuisFailure } from '../actions';

const mapStateToProps = (state) => {
  //console.log('====>mapStateToProps', state.muis.muis)
  return {
    muisList: state.muis.muis.muisList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMuis: () => {
      //dispatch(fetchMuis()).then((response) => {
      var response = dispatch(fetchMuis());
      //console.log('reload data', response.payload.then((res)=>console.log(res)));
      //.payload().then((res)=>console.log(res))
      response.payload.then((response) =>  {
        if(typeof(response.data) == 'string'){
          response.data = JSON.parse(response.data)
        }
        console.log('json', response.data);
        !response.error ? dispatch(fetchMuisSuccess(response.data)) : dispatch(fetchMuisFailure(response.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MuisList);
