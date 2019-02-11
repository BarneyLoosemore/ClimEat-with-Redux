

export const fetchRecipes = () => async dispatch => {
  const response = await fetch('')

  dispatch({ type: 'FETCH_RECIPES', payload: ???? })
} 

