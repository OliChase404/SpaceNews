import React, { useState } from "react";

function NewThreadForm({ onThreadSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState ("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const posted_on = new Date().toLocaleString();
        const newThread = { title, content, author, posted_on };
        onThreadSubmit(newThread);
        setTitle("");
        setContent("");
        setAuthor("");
    }

    return (
        <div className="NewThreadForm">
            <h3>Join the conversation, or tell us what's on your mind!</h3>
            <h4>Please keep all content space-related</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
                <textarea
                    placeholder="What would you like to say?"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewThreadForm;