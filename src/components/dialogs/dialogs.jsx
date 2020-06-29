import React from "react";
import c from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <div className={c.dialog + ` ` + c.active}>
          <NavLink to="/dialogs/1">Alexey</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/2">Daha</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/3">Marina</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/4">Dmitriy</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/5">Sasha</NavLink>
        </div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>Привет!</div>
        <div className={c.message}>Привет, как дела?</div>
        <div className={c.message}>Привет, мы знакомы?</div>
      </div>
    </div>
  );
};

export default Dialogs;
