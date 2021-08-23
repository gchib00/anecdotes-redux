import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notificationReducer)
  const getStyle = () => {
    if (notification === ''){
      return {
        minHeight: '88px',
        visibility: 'hidden'
      }
    } else {
      return {
        border: 'solid',
        padding: 10,
        borderWidth: 1
      }
    }
  }
  return (
    <div style={getStyle()}>
      <h2>{notification}</h2>
    </div>
  )
}

export default Notification