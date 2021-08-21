import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import { combineReducers, createStore } from 'redux'

const reducer = combineReducers({
  anecdoteReducer,
  notificationReducer,
  filterReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store