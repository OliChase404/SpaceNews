import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF, LoadScriptNext } from "@react-google-maps/api";
import { googleMapsApiKey } from "../../secret";

const CurrentIss = () => {
    const [position, setPosition] = useState(null);
    const [timestamp, setTimestamp] = useState(null);
    const [isMapsApiLoaded, setIsMapsApiLoaded] = useState(false);

    const fetchIssData = () => {
        fetch("https://api.wheretheiss.at/v1/satellites/25544")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error fetching ISS data");
                }
            })
            .then((data) => {
                setPosition({ lat: data.latitude, lng: data.longitude });
                setTimestamp(data.timestamp);
            })
            .catch((error) => {
                console.error("error fetching ISS data:", error);
            });
    };

    useEffect(() => {
        fetchIssData();
        const intervalId = setInterval(fetchIssData, 20000);
        return () => clearInterval(intervalId);
    }, []);

    const handleMapApiLoad = () => {
        setIsMapsApiLoaded(true);
    };

    if (!position || !timestamp) {
        return <div>Loading...</div>;
    }

    return (
        <div className="CurrentIss">
            <LoadScriptNext googleMapsApiKey={googleMapsApiKey} onLoad={handleMapApiLoad}>
                {isMapsApiLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: `100%`, height: `400px` }}
                    center={position}
                    zoom={3}
                >
                    <MarkerF 
                        position={position}
                        icon={{
                        url: "/iss_icon.png",
                        scaledSize: new window.google.maps.Size(50, 50),
                    }}
                    />
                </GoogleMap>
                )}
            </LoadScriptNext>
            <div>Timestamp: {new Date(timestamp * 1000).toLocaleString()}</div>
        </div>
    );
};

export default CurrentIss;