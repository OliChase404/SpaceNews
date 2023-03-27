import React from "react";
import PageLinks from "./PageLinks";

function NavBar(){

    return(
        <div className="NavBar">
            <h1 className="NavBarHeadings">Space News</h1>
            <h2 className="NavBarHeadings">The Spaciest News</h2>
            <PageLinks  />
        </div>
    )
}

export default NavBar