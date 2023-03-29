import "../App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Forum from "./Forum/Forum";
import Map from "./Map/Map";
import MarsGallery from "./MarsGallery/MarsGallery";
import Curiosity from "./MarsGallery/Curiosity";
import Spirit from "./MarsGallery/Spirit";
import Opportunity from "./MarsGallery/Opportunity";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />

        <Route path="/map" element={<Map />} />
        <Route path="/marsgallery" element={<MarsGallery />} />
        <Route path="/marsgallery/curiosity" element={<Curiosity /> } />
        <Route path="/marsgallery/spirit" element={<Spirit /> } />
        <Route path="/marsgallery/opportunity" element={<Opportunity /> } />

        


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
