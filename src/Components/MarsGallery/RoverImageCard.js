import React, { useState } from "react";

function RoverImageCard({ img }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="RoverImageCard">
      <img
        onClick={() => setShowDetails(!showDetails)}
        alt={img.id}
        src={img.img_src}
      ></img>
      {showDetails ? (
        <div>
          <ul>
            <li>{`Earth Date: ${img.earth_date}`}</li>
            <li>{`Sol: ${img.sol}`}</li>
            <li>{`Camera: ${img.camera.name} - ${img.camera.full_name}`}</li>
            <li>{`Image ID: ${img.id}`}</li>
            <br></br>
            <p onClick={() => window.open(img.img_src)}>
              Click to view full size Image
            </p>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default RoverImageCard;
