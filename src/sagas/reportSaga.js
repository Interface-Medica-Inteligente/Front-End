// @flow
import React from 'react'
import type { Saga } from 'redux-saga'
import { pdf, Document } from '@react-pdf/renderer'
import { all, call, takeLatest } from 'redux-saga/effects'
import { Actions as ReportActions } from '../reducers/report'
import Api from '../services/api'
import { downloadPDF } from '../utils'

function * requestRegisterReport (action): Saga<*> {
  const { payload } = action
  const response = yield call(Api.getReportPDF, payload)

  downloadPDF(response.data)
}

export default function * sagas (): Saga<*> {
  yield all([
    takeLatest(ReportActions.ui.requestRegisterReport, requestRegisterReport)
  ])
}
