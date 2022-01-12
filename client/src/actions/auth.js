import Swal from "sweetalert2";
import { types } from "../types";
import { fecthSinToken } from "../helpers/fecth";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fecthSinToken("auth", { email, password }, "POST");

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      // TODO terminar de acomodar validaciones
      Swal.fire(
        "Error",
        body.msg || body.errors.email.msg || body.errors.password.msg,
        "error"
      );
    }
  };
};

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    const resp = await fecthSinToken(
      "auth/new",
      { name, email, password },
      "POST"
    );

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      // TODO terminar de acomodar validaciones
      console.log(body);
      Swal.fire(
        "Error",
        body.msg ||
          body.errors.name.msg ||
          body.errors.email.msg ||
          body.errors.password.msg,
        "error"
      );
    }
  };
};

export const startLogout = () => {
  localStorage.clear();

  return (dispatch) => {
    dispatch(logout());
    dispatch(eventLogout());
  };
};

const logout = () => ({
  type: types.authLogout,
});

const eventLogout = () => ({
  type: types.eventLogout,
});

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});