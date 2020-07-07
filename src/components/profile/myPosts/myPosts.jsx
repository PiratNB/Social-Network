import React from "react";
import Post from "./post/post";
import c from "./myPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      <div className={c.postsBlock}>
        <h3>Мои посты:</h3>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button
            onClick={addPost}
          >
            Add post
          </button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
