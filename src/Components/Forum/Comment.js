// NOTE: This component code includes variables, functions, & props related to Comment functionality on Thread posts that was not included for MVP

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