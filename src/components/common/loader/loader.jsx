import React from "react";
import c from "./loader.module.css";

const Loader = () => {
    return (
        <div className={c.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};

export default Loader;
