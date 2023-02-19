import React, { useContext } from "react";
import Authenticate from "./authenticate";

function Login() {
  const { setUsername, setShowProfile } = useContext(Authenticate);
  return (
    <>
      <input
        type="text"
        placeholder="Username.."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="dummyPassword.." />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </>
  );
}

export default Login;
