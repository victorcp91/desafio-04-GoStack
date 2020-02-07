import React from "react";
import PropTypes from "prop-types";

import "./Comment.css";

function Comment({ comment }) {
  return (
    <div className="comment">
      <img className="commentAvatar" src={comment.author.avatar} alt="" />
      <p className="commentContent">
        <strong>{comment.author.name} </strong> {comment.content}
      </p>
    </div>
  );
}

Comment.PropTypes = {
  comment: PropTypes.objectOf(PropTypes.string)
};

export default Comment;
