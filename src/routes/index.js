// @flow
import * as React from 'react'
import BlankScreen from '../pages/BlankScreen'
import AuthRouter from './AuthRouter'

const Routes = (): React.Node => {
  const isLogged = false

  if (!isLogged) {
    return <AuthRouter />
  }

  return <BlankScreen />
}

export default Routes
