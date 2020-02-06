import React from "react";

import Comment from "./Comment";

function Post({ post }) {
  return (
    <div className="post">
      <div className="postUserInfo">
        <img
          className="postAvatar"
          src={post.author.avatar}
          alt={post.author.name}
        />
        <div className="postTextInfo">
          <div className="postUserName">{post.author.name}</div>
          <div className="postDate">{post.date}</div>
        </div>
      </div>
      <p className="postContent">{post.content}</p>
      <hr />
      {post.comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

export default Post;
