import React, { useContext } from "react";
import Authenticate from "./authenticate";

function Login() {
  const { setUsername, setShowProfile } = useContext(Authenticate);
  return (
    <div className="contex">
      <h1>Hello</h1>
      <p>Welcome, Please input your Dummy details</p>
      <div className="contex-API">
        <span>
          <input
            className="input"
            type="text"
            placeholder="Username.."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </span>

        <span>
          <input className="input" type="text" placeholder="dummyPassword.." />
        </span>
        <span>
          <button
            onClick={() => {
              setShowProfile(true);
            }}
          >
            Login
          </button>
        </span>
      </div>
    </div>
  );
}

export default Login;
