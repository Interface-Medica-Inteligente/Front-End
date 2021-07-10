// @flow
import * as React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import doctorSelector from '../selectors/doctorSelector'
import AuthRouter from './AuthRouter'
import SideBarRouter from './SideBarRouter'


const Routes = (): React.Node => {
  const history = useHistory()
  const isLogged = useSelector(doctorSelector.isLogged)

  React.useEffect(() => {
    history.push(isLogged ? 'record' : '/')
  }, [isLogged])

  if (!isLogged) {
    return <AuthRouter />
  }

  return <SideBarRouter />
}

export default Routes
