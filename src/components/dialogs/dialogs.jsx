import React from "react";
import c from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <Dialog name="Alexey" id="1" />
        <Dialog name="Daha" id="2" />
        <Dialog name="Marina" id="3" />
        <Dialog name="Dmitriy" id="4" />
        <Dialog name="Sasha" id="5" />
      </div>
      <div className={c.messages}>
        <Message text="Привет!" />
        <Message text="Привет, как дела?" />
        <Message text="Привет, мы знакомы?" />
      </div>
    </div>
  );
};

export default Dialogs;
