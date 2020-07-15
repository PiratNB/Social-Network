import React from "react";
import ProfileInfo from "./profile-info/profile-info";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
