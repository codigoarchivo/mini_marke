import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

import icos from "../../ico/icons.png";

export const Navbar = ({ change, setChange }) => {
  const { name } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleSpaceClick = () => {
    setChange(change ? false : true);
  };

  return (
    <>
      <nav className="nav">
        <ul className="nav-cont">
          <li className="nav-item" onClick={handleSpaceClick}>
            <img className="ico-img" src={icos} alt="Foto" />
          </li>
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
