import React from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./FormScreen.css";

export const Login = () => {
  const dispatch = useDispatch();

  const [formLoginValue, handleLoginInputChange] = useForm({
    lEmail: "jackson@gmail.com",
    lPassword: "123456",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  const { lEmail, lPassword } = formLoginValue;
  return (
    <>
      <div className="cont-div">
        <div className="login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                name="lEmail"
                type="email"
                className="form-control"
                placeholder="Correo"
                onChange={handleLoginInputChange}
                value={lEmail}
              />
            </div>
            <div className="form-group">
              <input
                name="lPassword"
                type="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={handleLoginInputChange}
                value={lPassword}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
