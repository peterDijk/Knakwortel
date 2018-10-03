import * as React from 'react'
import { connect } from 'react-redux'
import { loadRecipes } from '../actions/recipes'
import Test from './Test'

class TestContainer extends React.Component {
  componentDidMount() {
    this.props.loadRecipes()
}

  render() {
    if (!this.props.recipes) return 'Loading...'
    return (
      <div>
        <Test />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps, {loadRecipes})(TestContainer)