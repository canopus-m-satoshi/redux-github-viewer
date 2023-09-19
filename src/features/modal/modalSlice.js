import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = true
    },
    closeModal: (state) => {
      state.show = false
    },
  },
})

export const { showModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
