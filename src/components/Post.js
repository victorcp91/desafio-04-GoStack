import React from "react";
import PropTypes from "prop-types";

import "./Post.css";
import Comment from "./Comment";

function Post({ post }) {
  return (
    <div className="post">
      <div className="postUserInfo">
        <img className="postAvatar" src={post.author.avatar} alt="" />
        <div className="postTextInfo">
          <div className="postUserName">{post.author.name}</div>
          <div className="postDate">{post.date}</div>
        </div>
      </div>
      <p className="postContent">{post.content}</p>
      <hr className="commentsSeparator" />
      {post.comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

Post.PropTypes = {
  post: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Post;
