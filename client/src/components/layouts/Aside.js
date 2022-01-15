import React from "react";
import { Link } from "react-router-dom";
import icos1 from "../../ico/icons1.png";
import icos2 from "../../ico/icons2.png";
const Aside = ({ change }) => {
  return (
    <>
      <aside className="cont-aside">
        <ul className="aside-space">
          <li className="aside-item">
            <Link className="aside-link" to="/categoria">
              {change ? (
                "Categoria"
              ) : (
                <img className="ico-img" src={icos1} alt="Foto" />
              )}
            </Link>
          </li>
          <li className="aside-item">
            <Link className="aside-link" to="/producto">
              {change ? (
                "Producto"
              ) : (
                <img className="ico-img" src={icos2} alt="Foto" />
              )}
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};
export default Aside;
