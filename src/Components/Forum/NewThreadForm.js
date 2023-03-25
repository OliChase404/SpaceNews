import React, { useState } from "react";

function NewThreadForm({ onThreadSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState ("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newThread = { title, content, author };
        onThreadSubmit(newThread);
        setTitle("");
        setContent("");
        setAuthor("");
    }

    return (
        <div className="NewThreadForm">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <textarea
                    placeholder="What would you like to say?"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewThreadForm;