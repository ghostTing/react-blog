const blog = (state = {
  username: ''
}, action) => {
  switch (action.type) {
    case 'SAVE_USERNAME':
      return {
        ...state,
        username: action.username
      }
    default:
      return state
  }
}

export default blog
