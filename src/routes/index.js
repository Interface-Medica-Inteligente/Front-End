// @flow
import * as React from 'react'
import { useSelector } from 'react-redux'
import BlankScreen from '../pages/BlankScreen'
import AuthRouter from './AuthRouter'

const Routes = (): React.Node => {
  const isLogged = useSelector(state => !!state.doctor.entities.token)

  if (!isLogged) {
    return <AuthRouter />
  }

  return <BlankScreen />
}

export default Routes
