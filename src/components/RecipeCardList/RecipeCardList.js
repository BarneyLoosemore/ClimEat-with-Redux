import React from 'react'
import { connect } from 'react-redux'

const RecipeCardList = (props) => {

  return (
    <div>
      RecipeCardList
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeCardList)