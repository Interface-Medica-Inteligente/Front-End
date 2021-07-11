// @flow
import type { Saga } from 'redux-saga'
import { all, takeLatest } from 'redux-saga/effects'
import { Actions as ReportActions } from '../reducers/report'

function * requestRegisterReport (action): Saga<*> {
  const { payload } = action
}

export default function * sagas (): Saga<*> {
  yield all([
    takeLatest(ReportActions.ui.requestRegisterReport, requestRegisterReport)
  ])
}
