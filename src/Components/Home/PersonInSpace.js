import React from "react";

function PersonInSpace({crewMember}){

    return(
        <ul className="PersonInSpace">
            {crewMember.name}
        </ul>
    )
}

export default PersonInSpace