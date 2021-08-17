import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import {notifyVoteSuccess} from '../reducers/notificationReducer'

const  AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdoteReducer)
  anecdotes.sort((a, b) => {return b.votes - a.votes})
  const dispatch = useDispatch()
  const voteForItem = (id, content) => {
    dispatch(addVote(id))
    dispatch(notifyVoteSuccess(content))
  }
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={()=>voteForItem(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
