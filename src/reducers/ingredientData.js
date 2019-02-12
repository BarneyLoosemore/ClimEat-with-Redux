
const ingredientDataReducer = (state = [], action) => {
  switch (action.type){
    case 'FETCH_INGREDIENT_DATA':
      return action.payload
    default: 
      return state
  }
}

export default ingredientDataReducer