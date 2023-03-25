import React, { useState, useEffect } from "react";
import ForumHeader from "./ForumHeader";
import ThreadList from "./ThreadList";

function Forum(){
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () =>
        fetch("http://localhost:3001/posts")
        .then((response) => response.json())
        .then((postJson) => {
            setPosts(postJson);
            return fetch("http://localhost:3001/comments")
        })
        .then((response) => response.json())
        .then((commentJson) => {
            setComments(commentJson);
        })
    
    
    const handleThreadSubmit = (newThread) => {
        fetch("http://localhost:3001/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newThread),
        }).then((response) => {
            if (response.ok) {
                fetchData();
            }
        })
    };
    
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
      };
    
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <div className="Forum">
          <ForumHeader
            onThreadSubmit={handleThreadSubmit}
            onSearch={handleSearch}
          />
          <ThreadList posts={filteredPosts} comments={comments} />
        </div>
      );    
}

export default Forum