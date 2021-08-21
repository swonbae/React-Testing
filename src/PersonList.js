import React from "react";

function PersonList({ people = [] }) {
  return (
    <ul>
      {people.map((person, i) => (
        <li key={i}>
          {person.firstName} {person.lastName}
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
