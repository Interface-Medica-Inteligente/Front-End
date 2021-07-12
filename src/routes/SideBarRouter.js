// @flow
import * as React from 'react'

import { Route, Switch } from 'react-router-dom'
import SideBar from '../components/SideBar'

import MedicalRecordScreen from '../pages/MedicalRecordScreen'
import RevenueScreen from '../pages/RevenueScreen'
import ReportScreen from '../pages/ReportScreen'
import Dialog from '../components/Dialog'

const SideBarRouter = (): React.Node => {
  return (
    <Dialog>
      <SideBar>
        <Switch>
          <Route exact path='/record' component={MedicalRecordScreen} />
          <Route path='/recipe' component={RevenueScreen} />
          <Route path='/report' component={ReportScreen} />
        </Switch>
      </SideBar>
    </Dialog>
  )
}

export default SideBarRouter
