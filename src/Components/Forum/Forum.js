// NOTE: This component code includes variables, functions, & props related to Comment functionality on Thread posts that was not included for MVP

import React, { useState, useEffect } from "react";
import ForumHeader from "./ForumHeader";
import ThreadList from "./ThreadList";
import NewThreadForm from "./NewThreadForm";
import SearchThreads from "./SearchThreads";

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
    
    const handleSearch = ({ type, term }) => {
        setSearchTerm({ type, term });
      };
    
    const filteredPosts =
      searchTerm.type === "title"
        ? posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.term.toLowerCase())
          )
        : searchTerm.type === "content"
        ? posts.filter((post) =>
          post.content.toLowerCase().includes(searchTerm.term.toLowerCase())
          )
        : posts;

      // const filteredPosts = posts.filter((post) =>
      //   post.title.toLowerCase().includes(searchTerm.toLowerCase())
      // );

      return (
        <div className="Forum">
          <ForumHeader />
            <div className="ForumContent">
              <div className="ForumLeftColumn">
                <NewThreadForm onThreadSubmit={handleThreadSubmit} />
                <SearchThreads onSearch={handleSearch} />
                <div>
                  <button className="FormButton" onClick={() => setSearchTerm("")}>
                    Clear Search
                  </button>
                </div>
              </div>
              <div className="ForumRightColumn">
                <ThreadList posts={filteredPosts} comments={comments} />
              </div>
            </div>
        </div>
      );    
}

export default Forum