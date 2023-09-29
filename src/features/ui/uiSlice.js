import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: {
    show: false,
    stack: [],
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    show: (state) => {
      state.modal.show = !state.modal.show
    },
    push: (state, action) => {
      state.modal.stack.push(action.payload)
    },
  },
})

export const { show, push } = uiSlice.actions

export default uiSlice.reducer
