import React from "react";
import c from "./profile-info.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
          width="100%"
          height="200px"
          alt="logo"
        ></img>
      </div>
      <div className={c.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
