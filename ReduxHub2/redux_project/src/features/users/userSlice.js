import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "G.O.A.T",
  },
  {
    id: "1",
    name: "Sigma",
  },
  {
    id: "2",
    name: "Beta",
  },
];

const userSlice = createSlice({ name: "users", initialState, reducers: {} });

export const AllUsers = (state) => state.users;

export default userSlice.reducer;
