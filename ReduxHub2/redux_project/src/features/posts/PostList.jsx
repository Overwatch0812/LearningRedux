import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postSlice";
import React, { useEffect, useState } from "react";
import PostAuther from "./PostAuther";
import Time from "./Time";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPost = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const PostListZ = orderedPost.map((post) => (
    <article key={post.id}>
      <h3>{post.name}</h3>
      <PostAuther userId={post.userId} />
      <h3>{post.Designation}</h3>
      <Time timestamp={post.date} />
    </article>
  ));
  return (
    <>
      <h1>Posts</h1>
      {PostListZ}
    </>
  );
};

export default PostList;
