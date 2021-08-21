import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import { combineReducers, createStore } from 'redux'
import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
  anecdoteReducer,
  notificationReducer,
  filterReducer
})

const store = createStore(reducer, composeWithDevTools())

anecdoteService.getAll().then(anecdotes => {
  anecdotes.forEach(anecdote => {
    store.dispatch({
      type: 'ADD_ANECDOTE', 
      data: anecdote
    })
  })
})


export default store
