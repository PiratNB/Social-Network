import React from "react";
import Post from "./post/post";
import c from "./myPosts.module.css";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => (
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
