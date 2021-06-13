// @flow
import type { Saga } from 'redux-saga'
import { all, put, takeLatest } from 'redux-saga/effects'
import { Actions } from '../reducers/doctor'

function * requestLogin (action): Saga<*> {
  yield put(Actions.entities.setDoctor({ token: 'acafawfwe' }))
}

export default function * sagas (): Saga<*> {
  yield all([
    takeLatest(Actions.ui.requestLogin, requestLogin)
  ])
}
