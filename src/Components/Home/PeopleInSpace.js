import React, { useEffect, useState } from "react";

function PeopleInSpace(){
    const [peopleInSpace, setPeopleInSpace] = useState([])

    useEffect(()=> {
        fetch('http://api.open-notify.org/astros.json')
        .then((resp) => resp.json())
        .then((data) => setPeopleInSpace(data))
    }, [])

 console.log(peopleInSpace)

    return(
        <div>

        </div>
    )
}

export default PeopleInSpace