import React from "react";
import c from "./profile.module.css";
import MyPosts from "./myPosts/myPosts";

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img
          src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
          width="100%"
          height="200px"
          alt="logo"
        ></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;