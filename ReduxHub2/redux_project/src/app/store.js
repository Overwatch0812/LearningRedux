import { configureStore } from "@reduxjs/toolkit";
import postReduser from "../features/posts/postSlice";
import userReduser from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    posts: postReduser,
    users: userReduser,
  },
});

export default store;
