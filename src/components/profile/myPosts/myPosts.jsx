import React from "react";
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
      <Post message="Привет! Как дела?" likes="4"/>
      <Post message="Перезвони! Кое-что расскажу!" likes="20"/>
      <Post message="С Днем рождения!" likes="101"/>
    </div>
  );
};

export default MyPosts;
