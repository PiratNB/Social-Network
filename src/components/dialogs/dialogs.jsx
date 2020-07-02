import React from "react";
import c from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Alexey" },
    { id: 2, name: "Daha" },
    { id: 3, name: "Marina" },
    { id: 4, name: "Dmitriy" },
    { id: 5, name: "Sasha" },
  ];

  let messages = [
    { id: 1, text: "Привет!" },
    { id: 2, text: "Привет, как дела?" },
    { id: 3, text: "Привет, мы знакомы?" },
  ];

  let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id} />);
  let messagesElements = messages.map(m => <Message text={m.text} />);

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
