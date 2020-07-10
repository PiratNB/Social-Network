import state, { subscribe } from './redux/state';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, addDialog, updateNewPostText, updateNewMessageText } from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addDialog={addDialog}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};


rerenderEntireTree(state);

subscribe(rerenderEntireTree);