import React, { useEffect, useState } from "react";
import PersonInSpace from "./PersonInSpace";

function PeopleInSpace() {
  const [peopleInSpace, setPeopleInSpace] = useState(null);
  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then((data) => setPeopleInSpace(data));
  }, []);

  if (peopleInSpace !== null) {
    const { number, people } = peopleInSpace;
    const currentISSCrew = people.filter((per) => per.craft === "ISS");
    const currentShenzhouCrew = people.filter(
      (per) => per.craft === "Shenzhou 15"
    );
    const crewOfOtherCraft = people.filter(
      (per) => per.craft !== "ISS" && per.craft !== "Shenzhou 15"
    );

    const displayISSCrew = currentISSCrew.map((crewMember) => (
      <PersonInSpace key={crewMember.name} crewMember={crewMember} />
    ));
    const displayShenzhouCrew = currentShenzhouCrew.map((crewMember) => (
      <PersonInSpace key={crewMember.name} crewMember={crewMember} />
    ));

    const displayOtherCraftCrew = crewOfOtherCraft.map((crewMember) => (
      <PersonInSpace key={crewMember.name} crewMember={crewMember} />
    ));

    return (
      <div className="PeopleInSpace">
        <h2>{`There Are Currently ${number} Humans In Space`}</h2>
        <div>
          <h3>Crew Aboard the ISS</h3>
          <ul>{displayISSCrew}</ul>

          <h3>Crew Aboard the Shenzhou 15</h3>
          <ul>{displayShenzhouCrew}</ul>

          <h3>Crew Aboard Other Craft</h3>
          <ul>
            {crewOfOtherCraft.length > 0 ? displayOtherCraftCrew : "None"}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default PeopleInSpace;
