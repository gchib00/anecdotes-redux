import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToFilter } from '../reducers/filterReducer'


const Filter = () => {
  const filter = useSelector(state => state.filterReducer)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(addToFilter(event.target.value))
  }
  const style = {
    margin: 10
  }
  console.log('filter=',filter)
  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter