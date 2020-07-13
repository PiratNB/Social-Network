import React from "react";
import Post from "./post/post";
import c from "./myPosts.module.css";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator ());
  };

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.dispatch(onPostChangeActionCreator(text));
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
