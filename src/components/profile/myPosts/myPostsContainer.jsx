import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

let onPostChange = (text) => {
  let action = onPostChangeActionCreator(text);
  props.store.dispatch(action);
};

  return (
    <MyPosts updateNewPostText={onPostChange} 
    addPost={addPost} 
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
