import React from "react";
import { Link } from "react-router-dom";

function MarsGallery() {
  return (
    <div className="RoverLinkCardsContainer">
      <p>
        View The Complete Image Databases From Three of Nasa's Most Successful
        Mars Rovers
      </p>
      <Link className="PageLinks" to="/marsgallery/curiosity">
        <div className="CuriosityLinkCard">
          <h3>Curiosity</h3>
        </div>
      </Link>
      <Link className="PageLinks" to="/marsgallery/opportunity">
        <div className="OpportunityLinkCard">
          <h3>Opportunity</h3>
        </div>
      </Link>
      <Link className="PageLinks" to="/marsgallery/spirit">
        <div className="SpiritLinkCard">
          <h3>Spirit</h3>
        </div>
      </Link>
    </div>
  );
}

export default MarsGallery;
