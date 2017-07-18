const contact = (state = {}, action) => {
  console.log('reducers contact', state, action);
  switch (action.type) {
    case 'ADD_CONTACT':
      return state
//      return {
//        id: action.id,
//        text: action.text,
//        completed: false
//      }
    case 'TOGGLE_CONTACT':
      return state
//      if (state.id !== action.id) {
//        return state
//      }
//
//      return Object.assign({}, state, {
//        completed: !state.completed
//      })

    default:
      return state
  }
}

const contactlist = (state = [], action) => {
  console.log('reducers contactlist', action, state);
  switch (action.type) {
    case 'ADD_CONTACT':
      return state
      return [
        ...state,
        contact(undefined, action)
      ]
    case 'FILTER_CONTACT':
      return state
      return state.map(t =>
        contact(t, action)
      )
    default:
      return state
  }
}

export default contactlist