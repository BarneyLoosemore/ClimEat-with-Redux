import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'

import recipes from './recipes'
import ingredientData from './ingredientData'

const reducers = combineReducers({
  recipes,
  ingredientData
  // routing: routerReducer (?)
})

export default reducers

