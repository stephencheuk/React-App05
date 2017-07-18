import {
  FETCH_CONTACTS, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE, RESET_CONTACTS,
  FETCH_CONTACT, FETCH_CONTACT_SUCCESS,  FETCH_CONTACT_FAILURE, RESET_ACTIVE_CONTACT,
  CREATE_CONTACT, CREATE_CONTACT_SUCCESS, CREATE_CONTACT_FAILURE, RESET_NEW_CONTACT,
  DELETE_CONTACT, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE, RESET_DELETED_CONTACT,
  VALIDATE_CONTACT_FIELDS,VALIDATE_CONTACT_FIELDS_SUCCESS, VALIDATE_CONTACT_FIELDS_FAILURE, RESET_CONTACT_FIELDS
} from '../actions';


const INITIAL_STATE = {
  contactsList : { contacts: [],  error:null,  loading: false },
  newContact   : { contact: null, error: null, loading: false },
  activeContact: { contact: null, error:null,  loading: false },
  deletedContact: { contact: null, error:null,  loading: false },
};

export default function(state = INITIAL_STATE, action) {

  let error;

  console.log("called contactReducers", state, action);

  switch(action.type) {

    case FETCH_CONTACTS:// start fetching contacts and set loading = true

      return { ...state, contactsList: {contacts:[], error: null, loading: true} }; 

    case FETCH_CONTACTS_SUCCESS:// return list of contacts and make loading = false

      //return state; 
      return { ...state, contactsList: {contacts: (action.payload || []), error:null, loading: false} };

    case FETCH_CONTACTS_FAILURE:// return error and make loading = false

      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors

      return { ...state, contactsList: {contacts: [], error: error, loading: false} };

    case RESET_CONTACTS:// reset contactList to initial state

      return { ...state, contactsList: {contacts: [], error:null, loading: false} };

    case FETCH_CONTACT:

      return { ...state, activeContact:{...state.activeContact, loading: true}};

    case FETCH_CONTACT_SUCCESS:

      return { ...state, activeContact: {contact: action.payload, error:null, loading: false}};

    case FETCH_CONTACT_FAILURE:

      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors

      return { ...state, activeContact: {contact: null, error:error, loading:false}};

    case RESET_ACTIVE_CONTACT:

      return { ...state, activeContact: {contact: null, error:null, loading: false}};

    case CREATE_CONTACT:

      return {...state, newContact: {...state.newContact, loading: true}}

    case CREATE_CONTACT_SUCCESS:

      return {...state, newContact: {contact:action.payload, error:null, loading: false}}

    case CREATE_CONTACT_FAILURE:

      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors

      return {...state, newContact: {contact:null, error:error, loading: false}}

    case RESET_NEW_CONTACT:

      return {...state,  newContact:{contact:null, error:null, loading: false}}

    case DELETE_CONTACT:

      return {...state, deletedContact: {...state.deletedContact, loading: true}}

    case DELETE_CONTACT_SUCCESS:

      return {...state, deletedContact: {contact:action.payload, error:null, loading: false}}

    case DELETE_CONTACT_FAILURE:

      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors

      return {...state, deletedContact: {contact:null, error:error, loading: false}}

    case RESET_DELETED_CONTACT:

      return {...state,  deletedContact: {contact:null, error:null, loading: false}}

    case VALIDATE_CONTACT_FIELDS:

      return {...state, newContact: {...state.newContact, error: null, loading: true}}

    case VALIDATE_CONTACT_FIELDS_SUCCESS:

      return {...state, newContact: {...state.newContact, error: null, loading: false}}

    case VALIDATE_CONTACT_FIELDS_FAILURE:

      let result = action.payload;
      if(!result) {
        error = {message: action.payload.message};
      } else {
        error = {title: result.title, categories: result.categories, description: result.description};
      }

      return {...state, newContact:{...state.newContact, error: error, loading: false}}

    case RESET_CONTACT_FIELDS:

      return {...state, newContact:{...state.newContact, error: null, loading: null}}

    default:

      return state;

  }
}