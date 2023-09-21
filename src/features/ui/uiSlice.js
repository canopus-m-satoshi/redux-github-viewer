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
      state.modal.stack.id = action.payload.id
      state.modal.stack.title = action.payload.title
      state.modal.stack.status = action.payload.status
      state.modal.stack.description = action.payload.description
    },
  },
})

export const { show, stack } = uiSlice.actions

export default uiSlice.reducer
