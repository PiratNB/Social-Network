import React from "react";
import Post from "./post/post";
import c from "./myPosts.module.css";

const MyPosts = (props) => {

  let postData = [
    {id: 1, message: "Привет! Как дела?", likesCount: 4},
    {id: 2, message: "Перезвони! Кое-что расскажу!", likesCount: 20},
    {id: 3, message: "С Днем рождения!", likesCount: 101}
  ];

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
      <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
      <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
      <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
    </div>
  );
};

export default MyPosts;
