import React from "react";
import Post from "./post/post";
import c from "./myPosts.module.css";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "Привет! Как дела?", likesCount: 4 },
    { id: 2, message: "Перезвони! Кое-что расскажу!", likesCount: 20 },
    { id: 3, message: "С Днем рождения!", likesCount: 101 },
  ];

  let postsElements = posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      {postsElements}
    </div>
  );
};

export default MyPosts;
