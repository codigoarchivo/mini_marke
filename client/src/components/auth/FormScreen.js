import React from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import "./FormScreen.css";

export const FormScreen = () => {
  const [state, setstate] = React.useState(false);

  const handleLogin = () => {
    setstate(false);
  };
  const handleRegister = () => {
    setstate(true);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="button">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
          </div>
          {!state ? <Login /> : <Register />}
        </div>
      </div>
    </>
  );
};
