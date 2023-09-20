import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: {
    show: false,
    stack: {},
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    show: (state) => {
      state.modal.show = !state.modal.show
    },
    stack: (state, action) => {
      // state
    },
  },
})

export const { show, stack } = uiSlice.actions

export default uiSlice.reducer
