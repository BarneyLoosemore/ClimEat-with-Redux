

export const fetchRecipes = () => async dispatch => {
  const response = await fetch('http://localhost:3000/api/v1/recipes')
  const recipes = await response.json()
  dispatch({ type: 'FETCH_RECIPES', payload: recipes })
} 


export const fetchIngredientData = () => async dispatch => {
  const response = await fetch('../ingredient_data.json')
  const ingredientData = await response.json()
  dispatch({ type: 'FETCH_INGREDIENT_DATA', payload: ingredientData })
}
