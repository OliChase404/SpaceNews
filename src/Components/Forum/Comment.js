import React from "react";

function Comment({ comment }) {
    return (
        <div className="Comment">
            <p>{comment.body}</p>
            <p>Commenter: {comment.commenter}</p>
        </div>
    );
}

export default Comment;