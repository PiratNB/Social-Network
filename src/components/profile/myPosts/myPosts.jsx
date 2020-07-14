import React from "react";
import Post from "./post/post";
import c from "./myPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
};

  return (
    <div>
      <div className={c.postsBlock}>
        <h3>Мои посты:</h3>
        <div>
          <textarea placeholder='Введите сообщение' onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button
            onClick={onAddPost}
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
