// NOTE: This component code includes variables, functions, & props related to Comment functionality on Thread posts that was not included for MVP

import React from "react";
import Thread from "./Thread";

function ThreadList({ posts, comments }) {
    return (
        <div className="ThreadList">
            {posts.map((post) => (
                <Thread
                    key={post.id}
                    post={post}
                    comments={comments.filter((comment) => comment.postID === post.id)}
                />
            ))}
        </div>
    )
}

export default ThreadList;