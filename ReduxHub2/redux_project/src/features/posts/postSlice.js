import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    name: "SAHIL NIKSHE",
    Designation: "CEO/Founder",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    name: "Aryan Nagbanshi",
    Designation: "Co-Founder",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, Designation, userId) {
        return {
          payload: {
            id: nanoid(),
            name,
            Designation,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
