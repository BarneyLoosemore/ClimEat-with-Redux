import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import NavBar from '../NavBar/NavBar'
import RecipeCardList from '../RecipeCardList/RecipeCardList'
import IngredientCardList from '../IngredientCardList/IngredientCardList'
import PageNotFound from '../PageNotFound/PageNotFound'
import { fetchRecipes, fetchIngredientData } from '../../actions'
  
class App extends React.Component {

  state = {

  }

  async componentDidMount(){
    this.props.fetchRecipes()
    this.props.fetchIngredientData()
  }

  render(){
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={RecipeCardList} />
          <Route exact path='/ingredients' component={IngredientCardList} />
          <Route exact path='/about' />
          <Route exact path='/statistics' />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default connect(null, { fetchRecipes, fetchIngredientData })(App)