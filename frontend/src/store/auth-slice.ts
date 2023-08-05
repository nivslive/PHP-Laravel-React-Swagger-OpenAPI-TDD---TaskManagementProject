import { createSlice } from '@reduxjs/toolkit'


interface IIntialState {
    authenticated: boolean,
}

const initialState: IIntialState = {
  authenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state, action) {
        state.authenticated = true;
    }
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer