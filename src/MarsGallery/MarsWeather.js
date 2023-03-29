import React, { useEffect, useState } from "react";
import { nasaApiKey } from "../secrets";

function MarsWeather(){
    const [marsWeather, setMarsWeather] = useState([])


    useEffect(() => {
        fetch(`https://api.nasa.gov/insight_weather/?api_key=${nasaApiKey}&feedtype=json&ver=1.0`)
        .then((resp) => resp.json())
        .then((weatherData) => console.log(weatherData))
    }, [])

    return(
        <span></span>
    )
}

export default MarsWeather