import React from "react";
import c from "./dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog + ` `+ c.active}>
                    Alexey
                </div>
                <div className={c.dialog}>
                    Daha
                </div>
                <div className={c.dialog}>
                    Marina
                </div>
                <div className={c.dialog}>
                    Dmitriy
                </div>
                <div className={c.dialog}>
                    Sasha
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>
                    Привет!
                </div>
                <div className={c.message}>
                    Привет, как дела?
                </div>
                <div className={c.message}>
                    Привет, мы знакомы?
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
