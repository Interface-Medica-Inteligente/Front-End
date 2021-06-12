// @flow
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  fetching: boolean,
  error?: string | null
}

const initialState: State = {
  fetching: false,
  error: null
}

const doctorUiSlice = createSlice({
  name: 'doctor/ui',
  initialState,
  reducers: {
    requestLogin: (state: State) => {
      return { fetching: true, error: null }
    },
    failureLogin: (state: State, action: PayloadAction<string>) => {
      return { fetching: false, error: action.payload }
    }
  }
})

export default {
  initialState,
  ...doctorUiSlice
}
