import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/slices/authSlice'
// Check for persisted user data
const persistedUser = localStorage.getItem('user')
const initialState = persistedUser
  ? JSON.parse(persistedUser)
  : { isAuthenticated: false, user: null, token: null }

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: { auth: initialState },
})

store.subscribe(() => {
  // Save the auth state to localStorage whenever it changes
  localStorage.setItem('user', JSON.stringify(store.getState().auth))
})
export default store
