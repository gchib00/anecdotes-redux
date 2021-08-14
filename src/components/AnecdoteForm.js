import React from 'react'
import { useDispatch } from 'react-redux'


const addAnecdote = (event) => {
  event.preventDefault()
  const content = event.target.content.value
  event.target.content.value = ''
  return({type: 'ADD_ANECDOTE', anecdote: content})
}

const  AnecdoteForm = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(event) => dispatch(addAnecdote(event))}>
        <div><input name='content' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
