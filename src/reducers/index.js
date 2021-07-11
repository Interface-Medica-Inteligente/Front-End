import { combineReducers } from 'redux'

import dialog from './dialog'
import doctor from './doctor'
import attendance from './attendance'
import record from './record'
import recipe from './recipe'

const reducers = combineReducers({
  dialog,
  doctor,
  record,
  recipe,
  attendance
})

export type State = ReturnType<typeof reducers>

export default reducers
