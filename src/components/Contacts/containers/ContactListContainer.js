import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import ContactsList from '../components/ContactsList'
import { fetchContacts, fetchContactsSuccess, fetchContactsFailure } from '../actions';

const mapStateToProps = (state) => {
  //console.log('====>mapStateToProps', state.contacts.contacts)
  return {
    contactsList: state.contacts.contacts.contactsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => {
      //dispatch(fetchContacts()).then((response) => {
      var response = dispatch(fetchContacts());
      //console.log('reload data', response.payload.then((res)=>console.log(res)));
      //.payload().then((res)=>console.log(res))
      response.payload.then((response) =>  {
        if(typeof(response.data) == 'string'){
          response.data = JSON.parse(response.data)
        }
        console.log('json', response.data);
        !response.error ? dispatch(fetchContactsSuccess(response.data)) : dispatch(fetchContactsFailure(response.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
