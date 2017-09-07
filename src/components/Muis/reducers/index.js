import { combineReducers } from 'redux'
import muiReducers from './muis'

const muiApp = combineReducers({
  muis : muiReducers
})

export default function muis(state = [], action) {
  return muiApp({...state}, action);
}

muis.reducer = 'muis'
