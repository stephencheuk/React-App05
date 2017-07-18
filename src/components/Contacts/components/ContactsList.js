import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class ContactsList extends Component {

  componentWillMount() {
    //this.props.fetchContacts();
  }

  renderCategories(categories) {
     return categories.map((c) => {
        c = c.trim();
        return (
          <Link to={"filter/" + c} key={c} className="list-group-item-text">{" " + c + " "}</Link>
        );
     });
  }

  renderContacts(contacts) {
    console.log('ContactsList renderContacts', contacts)
    return contacts ? contacts.map((contact) => {
      return (
        <li className="list-group-item" key={contact.ID}>
          <Link style={{color:'black'}} to={"contacts/" + contact.ID}>
            <h3 className="list-group-item-heading">{contact.ContactName}</h3>
          </Link>
            {this.renderCategories([contact.Company])}
        </li>
      );
    }) : null;
  }

  render() {

    const { contacts, loading, error } = this.props.contactsList

    if(loading) {
      return <div className="container"><h1>Contacts</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h1 bsStyle='test'>Contacts</h1>
        <button onClick={this.props.fetchContacts}>Reload Data</button>
        <ul className="list-group">
          { this.renderContacts(contacts) }
        </ul>
      </div>
    );
  }

}

export default ContactsList;
