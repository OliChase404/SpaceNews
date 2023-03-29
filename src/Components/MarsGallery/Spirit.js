import React, { useEffect, useState } from "react";
import { nasaApiKey } from "../../secret";
import RoverImageCard from "./RoverImageCard";

function Spirit() {
  const [spiritRoverPics, setSpiritRoverPics] = useState([]);
  const [sole, setSole] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${sole}&api_key=${nasaApiKey}`
    )
      .then((resp) => resp.json())
      .then((cuirData) => setSpiritRoverPics(cuirData.photos))
      .catch((error) => {
        console.log(error);
      });
  }, [sole]);

  console.log(spiritRoverPics);

  const dispImages = spiritRoverPics.map((img) => (
    <RoverImageCard key={img.id} img={img} />
  ));

  return (
    <div className="RoverGallery">
      <h3>Images From Mars Rover Spirit</h3>
      <form onChange={(event) => setSole(event.target.value)}>
        <label>Select Mission Sol</label>
        <br></br>
        <input defaultValue={1} type="number"></input>
      </form>
      <p>Click an image for more details</p>
      {spiritRoverPics.length > 0 ? dispImages : ""}
    </div>
  );
}

export default Spirit;
