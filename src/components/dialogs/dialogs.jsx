import React from "react";
import c from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogs.map((d) => (<Dialog name={d.name} id={d.id} />));
  let messagesElements = state.messages.map((m) => (<Message text={m.text} />));
  let newMessageText = state.newMessageText;

  let addDialog = () => {
    props.sendMessage();
  };

  let onMessageChange = (evt) => {
    let text = evt.target.value;
    props.updateNewMessageBody(text)
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={c.messages}>{messagesElements}</div>
        <div>
          <textarea placeholder='Введите сообщение' onChange={onMessageChange} value={newMessageText} />
        </div>
        <div>
          <button onClick={addDialog}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
