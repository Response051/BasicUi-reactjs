import "./App.css";
import { Object } from "./Components/Main/Object";
import Authenticate from "./Components/ContexApis/authenticate";
import Login from "./Components/ContexApis/login";
import React, { useState } from "react";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Authenticate.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Object /> : <Login />}
      </Authenticate.Provider>
    </div>
  );
}

export default App;
