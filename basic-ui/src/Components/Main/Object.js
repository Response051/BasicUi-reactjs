import React from "react";
import mypicture from "../images/mypicture.jpeg";
export function Object() {
  const students = [
    {
      firstName: "ibeawuchi ",
      lastName: "sopuru",
      info: {
        age: 29,
        height: "6ft",
        attendance: "80%",
        averageScore: "90%",
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
      },
      image: mypicture,
      id: 2,
    },
    {
      firstName: "ibeawuchi ",
      lastName: "fidelis",
      info: {
        age: 39,
        height: "6.5ft",
        attendance: "70%",
        averageScore: "50%",
      },
      image: mypicture,
      id: 3,
    },
  ];
  const mappD = students.map((items, index) => (
    <div id={index} className="Main-div" >
      <li className="lists">
        <img src={items.image} alt="students-pictures" className="image" />
        <div className="para-tag">
          <p>Name: {items.firstName}</p>
          <p>{items.lastName}</p>
          <p>{items.info.age}</p>
          <p>{items.info.height}</p>
          <p>{items.info.averageScore}</p>
        </div>
      </li>
    </div>
  ));
  return (
    <div>
      <ul>{mappD}</ul>
    </div>
  );
}

export default Object;
