import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import { AllUsers } from "../users/userSlice";

const AddPost = () => {
  const [name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(AllUsers);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && Designation) {
      dispatch(addPost(name, Designation, userId));
      setDesignation("");
      setName("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <h1>Sumbit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={Designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          {userOptions}
        </select>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddPost;
