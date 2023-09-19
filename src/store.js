import { configureStore } from '@reduxjs/toolkit'
import toggleTabReducer from './features/toggleTabSlice'
import modalReducer from './features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    toggleTab: toggleTabReducer,
    modal: modalReducer,
  },
})
