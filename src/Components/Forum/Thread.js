import React from "react";
import Comment from "./Comment";

function Thread({ post, comments }) {
    return (
        <div className="Thread">
            <h3>{post.title}</h3>
            <h4>Author: {post.author}</h4>
            <p>{post.content}</p>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default Thread;