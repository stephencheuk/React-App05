import axios from 'axios';

//Post list
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';
export const RESET_CONTACTS = 'RESET_CONTACTS';

//Create new post
export const CREATE_CONTACT = 'CREATE_CONTACT';
export const CREATE_CONTACT_SUCCESS = 'CREATE_CONTACT_SUCCESS';
export const CREATE_CONTACT_FAILURE = 'CREATE_CONTACT_FAILURE';
export const RESET_NEW_CONTACT = 'RESET_NEW_CONTACT';

//Validate Contact fields like Title, Categries on the server
export const VALIDATE_CONTACT_FIELDS = 'VALIDATE_CONTACT_FIELDS';
export const VALIDATE_CONTACT_FIELDS_SUCCESS = 'VALIDATE_CONTACT_FIELDS_SUCCESS';
export const VALIDATE_CONTACT_FIELDS_FAILURE = 'VALIDATE_CONTACT_FIELDS_FAILURE';
export const RESET_CONTACT_FIELDS = 'RESET_CONTACT_FIELDS';

//Fetch Contact
export const FETCH_CONTACT = 'FETCH_CONTACT';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE';
export const RESET_ACTIVE_CONTACT = 'RESET_ACTIVE_CONTACT';

//Delete Contact
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE';
export const RESET_DELETED_CONTACT = 'RESET_DELETED_CONTACT';

//const ROOT_URL = window.location.href.indexOf('localhost') >= 0 ? 'http://localhost' + (window.location.port ? ':' + window.location.port : '') + '/api_contact' : '/api_contact';
const ROOT_URL = window.location.origin + '/api_contact';

console.log('ROOT_URL', ROOT_URL);

export function fetchContacts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/contacts?` + (new Date()).getTime(),
    headers: []
  });

  return {
    type: FETCH_CONTACTS,
    payload: request
  };
}

export function fetchContactsSuccess(contacts) {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    payload: contacts
  };
}

export function fetchContactsFailure(error) {
  return {
    type: FETCH_CONTACTS_FAILURE,
    payload: error
  };
}

export function validateContactFields(props) {
  //note: we cant have /contacts/validateFields because it'll match /contacts/:id path!
  const request = axios.post(`${ROOT_URL}/contacts/validate/fields`, props);

  return {
    type: VALIDATE_CONTACT_FIELDS,
    payload: request
  };
}

export function validateContactFieldsSuccess() {
  return {
    type: VALIDATE_CONTACT_FIELDS_SUCCESS
  };
}

export function validateContactFieldsFailure(error) {
  return {
    type: VALIDATE_CONTACT_FIELDS_FAILURE,
    payload: error
  };
}

export function resetContactFields() {
  return {
    type: RESET_CONTACT_FIELDS
  }
}
;


export function createContact(props, tokenFromStorage) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/contacts`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_CONTACT,
    payload: request
  };
}

export function createContactSuccess(newContact) {
  return {
    type: CREATE_CONTACT_SUCCESS,
    payload: newContact
  };
}

export function createContactFailure(error) {
  return {
    type: CREATE_CONTACT_FAILURE,
    payload: error
  };
}

export function resetNewContact() {
  return {
    type: RESET_NEW_CONTACT
  }
}
;

export function resetDeletedContact() {
  return {
    type: RESET_DELETED_CONTACT
  }
}
;

export function fetchContact(id) {
  const request = axios.get(`${ROOT_URL}/contacts/${id}`);

  return {
    type: FETCH_CONTACT,
    payload: request
  };
}


export function fetchContactSuccess(activeContact) {
  return {
    type: FETCH_CONTACT_SUCCESS,
    payload: activeContact
  };
}

export function fetchContactFailure(error) {
  return {
    type: FETCH_CONTACT_FAILURE,
    payload: error
  };
}

export function resetActiveContact() {
  return {
    type: RESET_ACTIVE_CONTACT
  }
}


export function deleteContact(id, tokenFromStorage) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/contacts/${id}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });
  return {
    type: DELETE_CONTACT,
    payload: request
  };
}

export function deleteContactSuccess(deletedContact) {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload: deletedContact
  };
}

export function deleteContactFailure(response) {
  return {
    type: DELETE_CONTACT_FAILURE,
    payload: response
  };
}

////////////////////////////////////////////////////////////////////////////

export const addContact = (text) => {
  return {
    type: 'ADD_CONTACT',
    text
  }
}

export const setSearchFilter = (filter) => {
  //console.log('setSearchFilter', filter.target.value);
  return {
    type: 'FILTER_CONTACT',
    filter: filter.target.value
  }
}

