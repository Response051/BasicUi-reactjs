import React from "react";
import mypicture from "../images/mypicture.jpeg";
import { Header } from "../Header/header";

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
        remarks: "Promising",
      },
      image: mypicture,
      id: 1,
    },
    {
      firstName: "Atiku ",
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
    {
      firstName: "ibeawuchi ",
      lastName: "fidelis",
      info: {
        age: 39,
        height: "6.5ft",
        attendance: "70%",
        averageScore: "50%",
        remarks: "Promising",
      },
      image: mypicture,
      id: 3,
    },
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
    {
      firstName: "Faith ",
      lastName: "fidelis",
      info: {
        age: 39,
        height: "6.5ft",
        attendance: "70%",
        averageScore: "50%",
        remarks: "Promising",
      },
      image: mypicture,
      id: 3,
    },
    {
      firstName: "Peter ",
      lastName: "Obi",
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
    {
      firstName: "ibeawuchi ",
      lastName: "fidelis",
      info: {
        age: 39,
        height: "6.5ft",
        attendance: "70%",
        averageScore: "50%",
        remarks: "Promising",
      },
      image: mypicture,
      id: 3,
    },
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
    {
      firstName: "ibeawuchi ",
      lastName: "fidelis",
      info: {
        age: 39,
        height: "6.5ft",
        attendance: "70%",
        averageScore: "50%",
        remarks: "Promising",
      },
      image: mypicture,
      id: 3,
    },
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
    {
      firstName: "ibeawuchi ",
      lastName: "fidelis",
      info: {
        age: 39,
        height: "6.5ft",
        attendance: "70%",
        averageScore: "50%",
        remarks: "Promising",
      },
      image: mypicture,
      id: 3,
    },
  ];
  const mappD = students.map((items, index) => (
    <div id={index} className="Main-div">
      <li className="lists">
        <img src={items.image} alt="students-pictures" className="image-tag" />
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
    <div>
    <Header />
      <ul>{mappD}</ul>
    </div>
  );
}

export default Object;
