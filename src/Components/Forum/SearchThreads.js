import React, { useState } from "react";

function SearchThreads({ onSearch }) {
    const [searchTitleTerm, setSearchTitleTerm] = useState("");
    const [searchContentTerm, setSearchContentTerm] = useState("");

    const handleSearch = (event, searchType) => {
        event.preventDefault();
        if (searchType === "title") {
            onSearch({ type: searchType, term: searchTitleTerm });
            setSearchTitleTerm("");
        } else if (searchType === "content") {
            onSearch({ type: searchType, term: searchContentTerm });
            setSearchContentTerm("");
        }
    };

    return (
        <div className="SearchThreads">
            <h3>Search The Forum by Title or Content</h3>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search Title"
                    value={searchTitleTerm}
                    onChange={(event) => setSearchTitleTerm(event.target.value)}
                />
                <button onClick={(event) => handleSearch(event, "title")} type="submit">Search Title</button>
                <input
                    type="text"
                    placeholder="Search Content"
                    value={searchContentTerm}
                    onChange={(event) => setSearchContentTerm(event.target.value)}
                />
                <button onClick={(event) => handleSearch(event, "content")} type="submit">Search Content</button>
            </form>
        </div>
    )
}

export default SearchThreads;