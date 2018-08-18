import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Main } from '../components'
import { fetchProfile } from '../actions'

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchProfile()
  }

  render() {
    return <Main profile={this.props.profile} />
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile()),
})

const mapStateToProps = state => ({
  profile: state.profile,
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
