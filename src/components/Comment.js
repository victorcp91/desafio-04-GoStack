import React from "react";

function Comment({ comment }) {
  return (
    <div className="comment">
      <img
        className="commentAvatar"
        src={comment.author.avatar}
        alt={comment.author.name}
      />
      <p className="commentContent">
        <strong>{comment.author.name} </strong> {comment.content}
      </p>
    </div>
  );
}

export default Comment;
