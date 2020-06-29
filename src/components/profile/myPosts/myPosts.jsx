import React from "react";
import Post from "./post/post";
import c from "./myPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      <div className={c.postsBlock}>
        <h3>Мои посты:</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <Post message="Привет! Как дела?" likes="4" />
      <Post message="Перезвони! Кое-что расскажу!" likes="20" />
      <Post message="С Днем рождения!" likes="101" />
    </div>
  );
};

export default MyPosts;
