// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VOTE': {
      const newState=[...state]
      const votedAnecdote = newState.find(anecdote => anecdote.id === action.id)
      votedAnecdote.votes += 1
      return [...newState]
    }
    case 'ADD_ANECDOTE': {
      const newAnecdote = {
        content: action.data.content,
        id: action.data.id,
        votes: action.data.votes
      }
      const newState = [...state, newAnecdote]
      return newState
    }
    default: 
      return state
  }
}

export const addVote = (id) => {
  return{
    type: 'ADD_VOTE',
    id: id
  }
}

export const addAnecdote = (event) => {
  event.preventDefault()
  const content = event.target.content.value
  event.target.content.value = ''
  return({type: 'ADD_ANECDOTE', anecdote: content})
}

export default anecdoteReducer