import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const addVote = (id) => {
  return{
    type: 'ADD_VOTE',
    id: id
  }
}

const  AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  anecdotes.sort((a, b) => {return b.votes - a.votes})
  const dispatch = useDispatch()
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
