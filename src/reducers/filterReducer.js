const initialFilter = ''

const filterReducer = (state = initialFilter, action) => {
  switch(action.type) {
    case 'FILTER': {
      const newState = action.letter
      console.log(newState)
      return newState
    }
    default: 
      return ''
  }
}

export const addToFilter = (letter) => {
  return{
    type: 'FILTER',
    letter: letter
  }
}

export default filterReducer