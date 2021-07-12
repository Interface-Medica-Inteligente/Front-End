// @flow
import * as React from 'react'

import { Route, Switch } from 'react-router-dom'

import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'

const AuthRouter = (): React.Node => {
  return (
    <Switch>
      <Route exact path='/' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
    </Switch>

  )
}

export default AuthRouter
