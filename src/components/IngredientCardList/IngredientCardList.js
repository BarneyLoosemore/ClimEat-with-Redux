import React from 'react'
import { connect } from 'react-redux'

const IngredientCardList = (props) => {

  return (
    <div>
      IngredientCardList
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredientData
  }
}

export default connect(mapStateToProps)(IngredientCardList)