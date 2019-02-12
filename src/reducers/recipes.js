
const recipesReducer = (state = [], action) => {
  switch (action.type){
    case 'FETCH_RECIPES':
      return action.payload.data
    default: 
      return state
  }
}

export default recipesReducer