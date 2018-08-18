import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions'
import AppHeader from '../components/AppHeader'

const AppHeaderContainer = ({ profile, onLogout }) => (
  <AppHeader profile={profile} onLogout={onLogout} />
)

const mapStateToProps = state => ({
  profile: state.profile,
})

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer)
