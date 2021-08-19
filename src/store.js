import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import { combineReducers, createStore } from 'redux'
// import thunk from 'redux-thunk'

const reducer = combineReducers({
  anecdoteReducer,
  notificationReducer,
  filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
  // applyMiddleware(thunk)
)

export default store
