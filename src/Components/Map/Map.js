import React from "react";
import MapHeader from "./MapHeader";
import CurrentIss from "./CurrentIss";

const Map = () => {
    return (
        <div className="MapContainer">
            <MapHeader />
            <CurrentIss />
        </div>
    );
};

export default Map;