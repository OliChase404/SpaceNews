import React, { useState } from "react";

function SearchThreads({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className="SearchThreads">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search threads"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchThreads;