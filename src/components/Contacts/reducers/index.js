import { combineReducers } from 'redux'
import contactReducers from './contacts'
import filter from './filter'

const contactApp = combineReducers({
  contacts : contactReducers
})
//    ,
//  filter

export default function contacts(state = [], action) {
  console.log('state', state)
  console.log('action', action)
  //console.log('action', contactApp)
  return contactApp({...state}, action);
}

contacts.reducer = 'contacts'
