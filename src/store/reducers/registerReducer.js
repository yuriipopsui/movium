import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false
}

const createUserSlice = createSlice ({
  name: 'createUser',
  initialState,

  reducers: {
    createUser: {
      reducer: (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        console.log(state.user);
        console.log(state.isAuth);
      }
    }
  }
});

export const {createUser} = createUserSlice.actions;
export default createUserSlice.reducer;