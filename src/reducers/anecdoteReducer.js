import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VOTE': {
      const newState=[...state]
      const votedAnecdote = newState.find(anecdote => anecdote.id === action.id)
      votedAnecdote.votes += 1
      return [...newState]
    }
    case 'ADD_ANECDOTE': {
      return [...state, action.data ]
    }
    default: 
      return state
  }
}
export const addVote = (id) => {
  return{type: 'ADD_VOTE',id: id}
}
export const addAnecdote = (data) => {
  return({type: 'ADD_ANECDOTE', data})
}
export const initializeAnecdotes = () => {
  return async dispatch => {
    const list = await anecdoteService.getAll()
    list.forEach(anecedote => {
      dispatch({type: 'ADD_ANECDOTE', data: anecedote})
    })
  }
}

export default anecdoteReducer