import React, { useEffect, useState } from "react";

function PictureOfTheDay() {
  const [picOfTheDay, setPicOfTheDay] = useState({});

  useEffect(() => {
    fetch("https://go-apod.herokuapp.com/apod ")
      .then((resp) => resp.json())
      .then((picData) => setPicOfTheDay(picData));
  }, []);

  return (
    <div className="PicOfTheDay">
      <h1>Picture Of The Day</h1>
      <h2>{`${picOfTheDay.title}`}</h2>
      <img
        onClick={() => window.open(picOfTheDay.hdurl)}
        alt="Daily Astronomy Picture"
        src={picOfTheDay.hdurl ? picOfTheDay.hdurl : picOfTheDay.url}
      ></img>
      <footer>{`Image Copyright: ${picOfTheDay.copyright}`}</footer>
      <p>{picOfTheDay.explanation}</p>
    </div>
  );
}

export default PictureOfTheDay;
