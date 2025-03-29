import { createSlice } from '@reduxjs/toolkit'
// Initial state for auth
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
    },
  },
})
// Export actions
export const { login, logout } = authSlice.actions
// Export the reducer
export default authSlice.reducer
