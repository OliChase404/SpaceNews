import React from "react";
import { Link } from "react-router-dom";

function PageLinks(){

    return(
        <span className="PageLinksContainer">
            <Link className="PageLinks" to='/'>Home</Link>
            <Link className="PageLinks" to='/forum'>Forum</Link>
            <Link className="PageLinks" to='/marsgallery'>Mars Gallery</Link>
        </span>
    )
}

export default PageLinks