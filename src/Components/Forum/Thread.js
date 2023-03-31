// NOTE: This component code includes variables, functions, & props related to Comment functionality on Thread posts that was not included for MVP

import React, { useState } from "react";
import Comment from "./Comment";

function Thread({ post, comments, onDeleteThread }) {
    
    const [showConfirm, setShowConfirm] = useState(false)
    
    const handleDeleteClick = () => {
        if([1, 2, 3, 4, 5, 6].includes(post.id)) {
            alert("Sorry, you're not allowed to delete these sacred words.");
        } else {
            setShowConfirm(true);
        }
    };

    const handleConfirmDelete = () => {
        onDeleteThread(post.id);
        setShowConfirm(false);
    };

    const handleCancelDelete = () => {
        setShowConfirm(false);
    };

    return (
        <div className="Thread">
            <h3>{post.title}</h3>
            <h4>Author: {post.author}</h4>
            <p>{post.content}</p>
            <p className="timestamp">Posted on: {post.posted_on}</p>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
            {showConfirm ? (
                <div>
                    <p>Are you sure you want to delete this thread?</p>
                    <button className="FormButton" onClick={handleConfirmDelete}>
                        Yes
                    </button>
                    <button className="FormButton" onClick={handleCancelDelete}>
                        No
                    </button>
                </div>
            ) : (
                <button className="FormButton" onClick={handleDeleteClick}>
                    Delete
                </button>
            )}
            
        </div>
    )
}

export default Thread;