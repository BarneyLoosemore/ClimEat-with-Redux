import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import RecipeCardList from '../RecipeCardList/RecipeCardList'
import IngredientCardList from '../IngredientCardList/IngredientCardList'

class App extends React.Component {

  render(){
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={RecipeCardList} />
          <Route exact path='/ingredients' component={IngredientCardList} />
        </Switch>
      </div>
    )
  }
}

export default App