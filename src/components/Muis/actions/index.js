import axios from 'axios';

//Post list
export const FETCH_MUIS = 'FETCH_MUIS';
export const FETCH_MUIS_SUCCESS = 'FETCH_MUIS_SUCCESS';
export const FETCH_MUIS_FAILURE = 'FETCH_MUIS_FAILURE';
export const RESET_MUIS = 'RESET_MUIS';

//Create new post
export const CREATE_MUI = 'CREATE_MUI';
export const CREATE_MUI_SUCCESS = 'CREATE_MUI_SUCCESS';
export const CREATE_MUI_FAILURE = 'CREATE_MUI_FAILURE';
export const RESET_NEW_MUI = 'RESET_NEW_MUI';

//Validate Mui fields like Title, Categries on the server
export const VALIDATE_MUI_FIELDS = 'VALIDATE_MUI_FIELDS';
export const VALIDATE_MUI_FIELDS_SUCCESS = 'VALIDATE_MUI_FIELDS_SUCCESS';
export const VALIDATE_MUI_FIELDS_FAILURE = 'VALIDATE_MUI_FIELDS_FAILURE';
export const RESET_MUI_FIELDS = 'RESET_MUI_FIELDS';

//Fetch Mui
export const FETCH_MUI = 'FETCH_MUI';
export const FETCH_MUI_SUCCESS = 'FETCH_MUI_SUCCESS';
export const FETCH_MUI_FAILURE = 'FETCH_MUI_FAILURE';
export const RESET_ACTIVE_MUI = 'RESET_ACTIVE_MUI';

//Delete Mui
export const DELETE_MUI = 'DELETE_MUI';
export const DELETE_MUI_SUCCESS = 'DELETE_MUI_SUCCESS';
export const DELETE_MUI_FAILURE = 'DELETE_MUI_FAILURE';
export const RESET_DELETED_MUI = 'RESET_DELETED_MUI';

//const ROOT_URL = window.location.href.indexOf('localhost') >= 0 ? 'http://localhost' + (window.location.port ? ':' + window.location.port : '') + '/api_mui' : '/api_mui';
const ROOT_URL = window.location.origin + '/api_mui';

console.log('ROOT_URL', ROOT_URL);

export function fetchMuis() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/muis?` + (new Date()).getTime(),
    headers: []
  });

  return {
    type: FETCH_MUIS,
    payload: request
  };
}

export function fetchMuisSuccess(muis) {
  return {
    type: FETCH_MUIS_SUCCESS,
    payload: muis
  };
}

export function fetchMuisFailure(error) {
  return {
    type: FETCH_MUIS_FAILURE,
    payload: error
  };
}

export function validateMuiFields(props) {
  //note: we cant have /muis/validateFields because it'll match /muis/:id path!
  const request = axios.post(`${ROOT_URL}/muis/validate/fields`, props);

  return {
    type: VALIDATE_MUI_FIELDS,
    payload: request
  };
}

export function validateMuiFieldsSuccess() {
  return {
    type: VALIDATE_MUI_FIELDS_SUCCESS
  };
}

export function validateMuiFieldsFailure(error) {
  return {
    type: VALIDATE_MUI_FIELDS_FAILURE,
    payload: error
  };
}

export function resetMuiFields() {
  return {
    type: RESET_MUI_FIELDS
  }
}
;


export function createMui(props, tokenFromStorage) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/muis`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_MUI,
    payload: request
  };
}

export function createMuiSuccess(newMui) {
  return {
    type: CREATE_MUI_SUCCESS,
    payload: newMui
  };
}

export function createMuiFailure(error) {
  return {
    type: CREATE_MUI_FAILURE,
    payload: error
  };
}

export function resetNewMui() {
  return {
    type: RESET_NEW_MUI
  }
}
;

export function resetDeletedMui() {
  return {
    type: RESET_DELETED_MUI
  }
}
;

export function fetchMui(id) {
  const request = axios.get(`${ROOT_URL}/muis/${id}`);

  return {
    type: FETCH_MUI,
    payload: request
  };
}


export function fetchMuiSuccess(activeMui) {
  return {
    type: FETCH_MUI_SUCCESS,
    payload: activeMui
  };
}

export function fetchMuiFailure(error) {
  return {
    type: FETCH_MUI_FAILURE,
    payload: error
  };
}

export function resetActiveMui() {
  return {
    type: RESET_ACTIVE_MUI
  }
}


export function deleteMui(id, tokenFromStorage) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/muis/${id}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });
  return {
    type: DELETE_MUI,
    payload: request
  };
}

export function deleteMuiSuccess(deletedMui) {
  return {
    type: DELETE_MUI_SUCCESS,
    payload: deletedMui
  };
}

export function deleteMuiFailure(response) {
  return {
    type: DELETE_MUI_FAILURE,
    payload: response
  };
}

////////////////////////////////////////////////////////////////////////////

export const addMui = (text) => {
  return {
    type: 'ADD_MUI',
    text
  }
}

export const setSearchFilter = (filter) => {
  //console.log('setSearchFilter', filter.target.value);
  return {
    type: 'FILTER_MUI',
    filter: filter.target.value
  }
}

