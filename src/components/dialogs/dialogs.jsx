import React from "react";
import c from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Alexey" },
    { id: 2, name: "Daha" },
    { id: 3, name: "Marina" },
    { id: 4, name: "Dmitriy" },
    { id: 5, name: "Sasha" },
  ];

  let messagesData = [
    { id: 1, text: "Привет" },
    { id: 2, text: "Привет, как дела?" },
    { id: 3, text: "Привет, мы знакомы?" }
  ];

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
        <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
        <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
        <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={c.messages}>
        <Message text={messagesData[0].text} />
        <Message text={messagesData[1].text} />
        <Message text={messagesData[2].text} />
      </div>
    </div>
  );
};

export default Dialogs;
