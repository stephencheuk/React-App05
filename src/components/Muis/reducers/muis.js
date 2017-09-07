import {
  FETCH_MUIS, FETCH_MUIS_SUCCESS, FETCH_MUIS_FAILURE, RESET_MUIS,
  FETCH_MUI, FETCH_MUI_SUCCESS,  FETCH_MUI_FAILURE, RESET_ACTIVE_MUI,
  CREATE_MUI, CREATE_MUI_SUCCESS, CREATE_MUI_FAILURE, RESET_NEW_MUI,
  DELETE_MUI, DELETE_MUI_SUCCESS, DELETE_MUI_FAILURE, RESET_DELETED_MUI,
  VALIDATE_MUI_FIELDS,VALIDATE_MUI_FIELDS_SUCCESS, VALIDATE_MUI_FIELDS_FAILURE, RESET_MUI_FIELDS
} from '../actions';


const INITIAL_STATE = {
  muisList : { muis: [],  error:null,  loading: false },
  newMui   : { mui: null, error: null, loading: false },
  activeMui: { mui: null, error:null,  loading: false },
  deletedMui: { mui: null, error:null,  loading: false },
};

export default function(state = INITIAL_STATE, action) {

  let error;

  console.log("called muiReducers", state, action);

  switch(action.type) {

    case FETCH_MUIS:// start fetching muis and set loading = true

      return { ...state, muisList: {muis:[], error: null, loading: true} }; 

    case FETCH_MUIS_SUCCESS:// return list of muis and make loading = false

      //return state; 
      return { ...state, muisList: {muis: (action.payload || []), error:null, loading: false} };

    case FETCH_MUIS_FAILURE:// return error and make loading = false

      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors

      return { ...state, muisList: {muis: [], error: error, loading: false} };

    case RESET_MUIS:// reset muiList to initial state

      return { ...state, muisList: {muis: [], error:null, loading: false} };

    case FETCH_MUI:

      return { ...state, activeMui:{...state.activeMui, loading: true}};

    case FETCH_MUI_SUCCESS:

      return { ...state, activeMui: {mui: action.payload, error:null, loading: false}};

    case FETCH_MUI_FAILURE:

      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors

      return { ...state, activeMui: {mui: null, error:error, loading:false}};

    case RESET_ACTIVE_MUI:

      return { ...state, activeMui: {mui: null, error:null, loading: false}};

    case CREATE_MUI:

      return {...state, newMui: {...state.newMui, loading: true}}

    case CREATE_MUI_SUCCESS:

      return {...state, newMui: {mui:action.payload, error:null, loading: false}}

    case CREATE_MUI_FAILURE:

      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors

      return {...state, newMui: {mui:null, error:error, loading: false}}

    case RESET_NEW_MUI:

      return {...state,  newMui:{mui:null, error:null, loading: false}}

    case DELETE_MUI:

      return {...state, deletedMui: {...state.deletedMui, loading: true}}

    case DELETE_MUI_SUCCESS:

      return {...state, deletedMui: {mui:action.payload, error:null, loading: false}}

    case DELETE_MUI_FAILURE:

      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors

      return {...state, deletedMui: {mui:null, error:error, loading: false}}

    case RESET_DELETED_MUI:

      return {...state,  deletedMui: {mui:null, error:null, loading: false}}

    case VALIDATE_MUI_FIELDS:

      return {...state, newMui: {...state.newMui, error: null, loading: true}}

    case VALIDATE_MUI_FIELDS_SUCCESS:

      return {...state, newMui: {...state.newMui, error: null, loading: false}}

    case VALIDATE_MUI_FIELDS_FAILURE:

      let result = action.payload;
      if(!result) {
        error = {message: action.payload.message};
      } else {
        error = {title: result.title, categories: result.categories, description: result.description};
      }

      return {...state, newMui:{...state.newMui, error: error, loading: false}}

    case RESET_MUI_FIELDS:

      return {...state, newMui:{...state.newMui, error: null, loading: null}}

    default:

      return state;

  }
}