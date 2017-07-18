const filter = (state = '', action) => {
  console.log('filter', state);
  switch (action.type) {
    case 'SHOW_FILTERED_CONTACT':
      return action.filter
    case 'FILTER_CONTACT':
      return action.filter
    default:
      return state
  }
}

export default filter