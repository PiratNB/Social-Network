import React from "react";
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profile-info/profile-info";



const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts= {props.state.posts} />
    </div>
  );
};

export default Profile;
