import React, { useState, useEffect } from "react";
// import axios from "axios";
import { GoogleMap, Marker, LoadScript, Data } from "@react-google-maps/api";
import { googleMapsApiKey } from "../../secret";

const CurrentIss = () => {
    const [position, setPosition] = useState(null);
    const [timestamp, setTimestamp] = useState(null);

    useEffect(() => {
        fetch("http://api.wheretheiss.at/v1/satellites/25544")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error fetching ISS data");
            }
        })
        .then((data) => {
            setPosition({ lat: Data.lattitude, lng: Data.longitude });
            setTimestamp(data.timestamp);
        })
        .catch((error) => {
            console.error("error fetching ISS data:", error);
        });
    }, []);

    if (!position || !timestamp) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                    mapContainerStyle={{ width: `100%`, height: `400px` }}
                    center={position}
                    zoom={3}
                >
                    <Marker position={position} />
                </GoogleMap>
            </LoadScript>
            <div>Timestamp: {newDate(timestamp * 1000).toLocaleString()}</div>
        </div>
    );
};

export default CurrentIss;