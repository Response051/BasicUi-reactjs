import React from "react";
import { useState } from "react";
import mypicture from "../images/mypicture.jpeg";

function List() {
  const [students, setStudents] = useState([
    {
      firstName: "ibeawuchi ",
      lastName: "sopuru",
      info: {
        age: 29,
        height: "6ft",
        attendance: "80%",
        averageScore: "90%",
        remarks: "Not-too-Promising",
      },
      image: mypicture,
      id: 1,
    },
    {
      firstName: "okon ",
      lastName: "George",
      info: {
        age: 49,
        height: "12ft",
        attendance: "80%",
        averageScore: "60%",
        remarks: "needs delivarance",
      },
      image: mypicture,
      id: 2,
    },
  ]);
  const mappeD =
    students &&
    students.map((items, index) => (
      <div id={index} className="Main-div">
        <li className="lists">
          <img
            src={items.image}
            alt="students-pictures"
            className="image-tag"
          />
          <div className="name-tag">
            <p>
              Name: {items.firstName}
              <span>{items.lastName}</span>
            </p>
          </div>
          <div className="info-tag">
            <p>Age: {items.info.age} Years</p>
            <p>Height: {items.info.height}</p>
          </div>
          <div className="score-tag">
            <p>Average-score: {items.info.averageScore}</p>
            <p>Remarks: {items.info.remarks}</p>
          </div>
        </li>
      </div>
    ));

  return (
    <div className="item-list">
      <ul>{mappeD}</ul>
    </div>
  );
}

export default List;
