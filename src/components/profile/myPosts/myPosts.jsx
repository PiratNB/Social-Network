import React from "react";
import c from "./myPosts.module.css";
import Post from "./post/post";

const MyPosts = () => {
  return (
    <div>
      My posts:
      <div>
          <textarea></textarea>
          <button>Add post</button>
      </div>
      <div>New post</div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
