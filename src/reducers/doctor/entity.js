// @flow
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  crm?: string,
  token?: string
}

const initialState: State = {
  crm: undefined,
  token: undefined
}

const doctorUiSlice = createSlice({
  name: 'doctor/entity',
  initialState,
  reducers: {
    setDoctor: (state: State, action: PayloadAction<any>) => {
      return { ...state, ...action.payload }
    }
  }
})

export default {
  initialState,
  ...doctorUiSlice
}
