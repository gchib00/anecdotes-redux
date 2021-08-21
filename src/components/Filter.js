import React from 'react'
import { useDispatch } from 'react-redux'
import { addToFilter } from '../reducers/filterReducer'


const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(addToFilter(event.target.value))
  }
  const style = {
    margin: 10
  }
  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter