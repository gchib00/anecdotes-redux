import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const  AnecdoteForm = () => {
  const dispatch = useDispatch()
  const getId = () => (100000 * Math.random()).toFixed(0)
  const createAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    const newObj = {
      content: content,
      id: getId(),
      votes: 0
    }
    await anecdoteService.addAnecdote(newObj)
    dispatch(addAnecdote(newObj))
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(event) => createAnecdote(event)}>
        <div><input name='content' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
