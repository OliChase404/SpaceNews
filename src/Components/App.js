import "../App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Forum from "./Forum/Forum";
import MarsGallery from "../MarsGallery/MarsGallery";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/marsgallery" element={<MarsGallery />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
