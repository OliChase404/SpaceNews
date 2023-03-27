import React from "react";
import PeopleInSpace from "./PeopleInSpace";
import PictureOfTheDay from "./PictureOfTheDay";

function WelcomePage(){

    return(
        <div className="WelcomePage">
            <PeopleInSpace />
            <PictureOfTheDay />
        </div>
    )
}

export default WelcomePage