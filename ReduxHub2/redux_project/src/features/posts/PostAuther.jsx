import React from "react";
import { useSelector } from "react-redux";
import { AllUsers } from "../users/userSlice";

const PostAuther = ({ userId }) => {
  const users = useSelector(AllUsers);
  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown"}</span>;
};

export default PostAuther;
