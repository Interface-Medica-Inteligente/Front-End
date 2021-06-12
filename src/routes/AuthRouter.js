// @flow
import * as React from 'react'

import { Route, Switch } from 'react-router-dom'

import BlankScreen from '../pages/BlankScreen'
import LoginScreen from '../pages/LoginScreen'

const AuthRouter = (): React.Node => {
  return (
    <Switch>
      <Route exact path='/' component={LoginScreen} />
      <Route path='/register' component={BlankScreen} />
    </Switch>

  )
}

export default AuthRouter
