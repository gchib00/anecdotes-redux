const initialState = ''

const anecdoteReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'VOTE_ADDED': {
      const newState=`You voted for: ${action.anecdoteContent}`
      console.log(newState)
      return newState
    }
    case 'REMOVE_NOTIFICATION': {
      const newState = ''
      return newState
    }
    default: 
      return state
  }
}

export const notifyVoteSuccess = async (content) => {
  return{
    type: 'VOTE_ADDED',
    anecdoteContent: content
  }
}
export const removeNotification = () => {
  return{
    type: 'REMOVE_NOTIFICATION'
  }
}


export default anecdoteReducer