import React from 'react'
import { connect } from 'react-redux'
import LoginForm from 'grommet/components/LoginForm'

import { login } from '../actions'


const Login = ({login}) => (
  <LoginForm
    usernameType="text"
    onSubmit={login}
  />
)

const mapDispatchToProps = dispatch => ({
  login: ({username, password}) => dispatch(login(username, password))
});

export default connect(null,mapDispatchToProps)(Login)
