import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { combineReducers, createStore } from 'redux'

const reducer = combineReducers({
  anecdoteReducer,
  notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store
