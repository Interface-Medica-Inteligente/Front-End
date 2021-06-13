// @flow
import * as React from 'react'
import { useSelector } from 'react-redux'
import BlankScreen from '../pages/BlankScreen'
import doctorSelector from '../selectors/doctorSelector'
import AuthRouter from './AuthRouter'

const Routes = (): React.Node => {
  const isLogged = useSelector(doctorSelector.isLogged)

  if (!isLogged) {
    return <AuthRouter />
  }

  return <BlankScreen />
}

export default Routes
