import React, { useContext } from "react";
import Authenticate from "../ContexApis/authenticate";

export function Header() {
  const { username } = useContext(Authenticate);
  return (
    <div className="Header-div">
      <h2>Students dash-board</h2>
      <p>WELCOME {username}</p>
    </div>
  );
}
