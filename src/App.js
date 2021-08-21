import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useSelector, useDispatch } from 'react-redux'
import anecdoteService from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdoteReducer)
  console.log('anecdotes=', anecdotes)


  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => {
      anecdotes.forEach(anecdote => {
        dispatch({
          type: 'ADD_ANECDOTE', 
          data: anecdote
        })
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (anecdotes === undefined || anecdotes.includes(undefined)){
    return <h1>API IS LOADING...</h1>
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App