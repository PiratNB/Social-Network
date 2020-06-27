import React from "react";
import c from "./post.module.css";

const Post = () => {
  return (
    <div>
      <div className="posts">
        <div className={c.item}>
          <img
            src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
            alt="avatar"
          />
          1 post
          <div>
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
