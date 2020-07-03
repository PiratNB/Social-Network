import React from "react";
import c from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
  let messagesElements = props.messages.map(m => <Message text={m.text} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={c.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
