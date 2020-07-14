import React from "react";
import { addDialogActionCreator, onMessageChangeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let addDialog = () => {
    props.store.dispatch(addDialogActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(onMessageChangeActionCreator(text));
  };

  return (
    <Dialogs updateNewMessageBody={onMessageChange} 
             sendMessage={addDialog}
             dialogsPage={state}
    />
  )
};

export default DialogsContainer;
