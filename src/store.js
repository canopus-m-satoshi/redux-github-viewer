import { configureStore } from '@reduxjs/toolkit'
import toggleTabReducer from './features/toggleTabSlice'

export const store = configureStore({
  reducer: {
    toggleTab: toggleTabReducer,
  },
})
