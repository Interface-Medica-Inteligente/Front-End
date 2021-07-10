// @flow
import * as React from 'react'
import { useSelector } from 'react-redux'
import MedicalRecordScreen from '../pages/MedicalRecordScreen'
import RevenueScreen from '../pages/RevenueScreen'
import ReportScreen from '../pages/ReportScreen'
import doctorSelector from '../selectors/doctorSelector'
import AuthRouter from './AuthRouter'

const Routes = (): React.Node => {
  const isLogged = useSelector(doctorSelector.isLogged)

  if (!isLogged) {
    return <AuthRouter />
  }

  return <ReportScreen />
}

export default Routes
