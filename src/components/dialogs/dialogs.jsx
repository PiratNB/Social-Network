import React from "react";
import c from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message text={m.text} />
  ));

  let newDialogElement = React.createRef();

  let addDialog = () => {
    props.addDialog();
  };

  let onMessageChange = () => {
    let text = newDialogElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={c.messages}>{messagesElements}</div>
        <div>
          <textarea onChange={onMessageChange} ref={newDialogElement} value={props.dialogsPage.newMessageText} />
        </div>
        <div>
          <button onClick={addDialog}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
