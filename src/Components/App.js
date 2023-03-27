import "../App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Forum from "./Forum/Forum";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/forum" element={<Forum />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
