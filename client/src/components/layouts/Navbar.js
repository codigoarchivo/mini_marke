import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Navbar = () => {
  const { name } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  
  return (
    <>
      <nav className="nav">
        <ul className="nav-cont">
          <li className="nav-item">icon</li>
          <li className="nav-item">Mini market</li>
        </ul>
        <ul className="nav-cont">
          <li className="nav-item">{name}</li>
          <li className="nav-item" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </nav>
    </>
  );
};
