import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

import { startRegister } from "../../actions/auth";

import { useForm } from "../../hooks/useForm";
import "./FormScreen.css";

export const Register = () => {
  const dispatch = useDispatch();

  const [formRegisterValue, handleRegisterInputChange] = useForm({
    rName: "irene",
    rEmail: "irene@gmail.com",
    rPassword1: "123456",
    rPassword2: "123456",
  });

  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValue;
  
  const handleRegister = (e) => {
    e.preventDefault();
    if (rPassword1 !== rPassword2) {
      Swal.fire("Error", "Las contraseñas deben de ser iguales", "error");
    }
    dispatch(startRegister(rName, rEmail, rPassword1));
  };


  return (
    <>
      <div className="cont-div">
        <div className="login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                name="rName"
                type="name"
                className="form-control"
                placeholder="Nombre"
                onChange={handleRegisterInputChange}
                value={rName}
              />
            </div>
            
            <div className="form-group">
              <input
                name="rEmail"
                type="email"
                className="form-control"
                placeholder="Correo"
                onChange={handleRegisterInputChange}
                value={rEmail}
              />
            </div>

            <div className="form-group">
              <input
                name="rPassword1"
                type="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={handleRegisterInputChange}
                value={rPassword1}
              />
            </div>

            <div className="form-group">
              <input
                name="rPassword2"
                type="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={handleRegisterInputChange}
                value={rPassword2}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
