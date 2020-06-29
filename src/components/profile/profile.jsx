import React from "react";
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profile-info/profile-info";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
