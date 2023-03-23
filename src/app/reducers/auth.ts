import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import authService from '../services/auth.service';

export const register = createAsyncThunk(
    "auth/register",
    async ({ username, email, password } : any, thunkAPI) => {
      try {
        const response = await authService.register(username, email, password);
        return response.data;
      } catch (error : any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    }
  );
  
  export const login = createAsyncThunk(
    "auth/login",
    async ({ username, password }: any, thunkAPI) => {
      try {
        const data = await authService.login(username, password);
        return { user: data };
      } catch (error : any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    }
);

// Define a type for the slice state
interface AuthState {
    isLoggedIn: boolean,
    user: any,
}

// Define the initial state using that type
const initialState = {
  isLoggedIn: false,
  user: null,
} as AuthState

export const authSlice = createSlice({
  name: 'auth/register',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    registerFilled: (state) => {
      state.isLoggedIn = false
    },
    registerRejected: (state) => {
        state.isLoggedIn = false
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    loginFilled: (state, action: PayloadAction<AuthState>) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
    },
    loginRejected: (state) => {
        state.isLoggedIn = false
        state.user = null;
    },
    logoutFilled: (state) =>{
        state.isLoggedIn = false
        state.user = null;
    }
  },
})

export const { registerFilled, registerRejected, loginFilled,loginRejected,logoutFilled  } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
