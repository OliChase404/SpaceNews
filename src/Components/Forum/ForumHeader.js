import React from "react";
import NewThreadForm from "./NewThreadForm";
import SearchThreads from "./SearchThreads";

function ForumHeader({ onThreadSubmit, onSearch }) {
    return (
        <div className="ForumHeader">
            <h2>Forum Header</h2>
            <NewThreadForm onThreadSubmit={onThreadSubmit} />
            <SearchThreads onSearch={onSearch}/>
        </div>
    )
}

export default ForumHeader;