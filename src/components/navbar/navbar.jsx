/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import c from "./navbar.module.css";

const Navbar = () => {
    return (
      <nav className={c.nav}>
        <div className={`${c.item} ${c.active}`}>
          <a href="/profile">Profile</a>
        </div>
        <div className={c.item}>
          <a  href="/dialogs">Messages</a>
        </div>
        <div className={c.item}>
          <a href="/news">News</a>
        </div>
        <div className={c.item}>
          <a href="/music">Music</a>
        </div>
        <div className={c.item}>
          <a href="/settings">Settings</a>
        </div>
      </nav>
    );
};

export default Navbar;
