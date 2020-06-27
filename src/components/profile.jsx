import React from "react";
import c from "./profile.module.css";

const Profile = () => {
    return (
        <div className={c.content}>
        <div>
          <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" width="100%" height="200px" alt="logo"></img>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div className="posts">
            <div className={c.item}>1 post</div>
            <div className={c.item}>2 post</div>
          </div>
        </div>
      </div>
    );
};

export default Profile;
