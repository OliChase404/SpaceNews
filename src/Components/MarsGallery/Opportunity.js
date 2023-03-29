import React, { useEffect, useState } from "react";
import { nasaApiKey } from "../../secret";
import RoverImageCard from "./RoverImageCard";

function Opportunity() {
  const [opportunityRoverPics, setOpportunityRoverPics] = useState([]);
  const [sole, setSole] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${sole}&api_key=${nasaApiKey}`
    )
      .then((resp) => resp.json())
      .then((cuirData) => setOpportunityRoverPics(cuirData.photos))
      .catch((error) => {
        console.log(error);
      });
  }, [sole]);

  console.log(opportunityRoverPics);

  const dispImages = opportunityRoverPics.map((img) => (
    <RoverImageCard key={img.id} img={img} />
  ));

  return (
    <div className="RoverGallery">
      <h3>Images From Mars Rover Opportunity</h3>
      <form onChange={(event) => setSole(event.target.value)}>
        <label>Select Mission Sol</label>
        <br></br>
        <input defaultValue={1} type="number"></input>
      </form>
      <p>Click an image for more details</p>
      {opportunityRoverPics.length > 0 ? dispImages : ""}
    </div>
  );
}

export default Opportunity;
