import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShow: false,
}

export const toggleTabSlice = createSlice({
  name: 'toggleTab',
  initialState,
  reducers: {
    toggleTab: (state) => {
      state.isShow = !state
    },
  },
})

export const { toggleTab } = toggleTabSlice.actions

export default toggleTabSlice.reducer
