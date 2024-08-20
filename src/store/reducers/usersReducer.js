import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
};

// Add verification for unic of User before adding in state

const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.users.push(action.payload);
      },
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
