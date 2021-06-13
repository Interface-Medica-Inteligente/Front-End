// @flow
import { all } from 'redux-saga/effects'

import doctorSaga from './doctorSaga'

import type { Saga } from 'redux-saga'

export default function * root (): Saga<*> {
  yield all([
    doctorSaga()
  ])
}
