const initialState = ''

const anecdoteReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'VOTE_ADDED': {
      const newState=`You voted for: ${action.anecdoteContent}`
      return newState
    }
    case 'HIDE_NOTIFICATION': {
      return ''
    }
    default: 
      return state
  }
}

export const notifyVoteSuccess = (content) => {
  return{
    type: 'VOTE_ADDED',
    anecdoteContent: content
  }
}

export const hideNotification = () => {
  return dispatch => {
    setTimeout(() => 
      dispatch({type: 'HIDE_NOTIFICATION'})
    , 4000)
  } 
  // return{
  //   type: 'HIDE_NOTIFICATION'
  // } 
}

export default anecdoteReducer