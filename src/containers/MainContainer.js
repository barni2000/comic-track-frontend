import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Main } from '../components'
import { fetchProfile, logout } from '../actions'

class MainContainer extends Component {

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return <Main {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile()),
  // TODO: move somewhere else
  logout: () => dispatch(logout()),
})

const mapStateToProps = state => ({
  profile: state.profile,
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
