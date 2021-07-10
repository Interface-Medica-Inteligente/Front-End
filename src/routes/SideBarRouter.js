// @flow
import * as React from 'react'

import { Route, Switch } from 'react-router-dom'
import SideBar from '../components/SideBar'

import BlankScreen from '../pages/BlankScreen'
import LoginScreen from '../pages/LoginScreen'


const SideBarRouter = (): React.Node => {
  return (
    <SideBar>
      <Switch>
        <Route exact path='/record' component={BlankScreen} />
        <Route path='/recipe' component={LoginScreen} />
        <Route path='/report' component={BlankScreen} />
      </Switch>
    </SideBar>
  )
}

export default SideBarRouter
