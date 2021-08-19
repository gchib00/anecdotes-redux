import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notificationReducer)
  const dispatch = useDispatch()

  const removeNotif = () => {
    dispatch(hideNotification())
  }
  const timeoutFn = () => setTimeout(removeNotif, 3000)

  const getStyle = () => {
    if (notification === ''){
      return {
        minHeight: '88px',
        visibility: 'hidden'
      }
    } else {
      timeoutFn()
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