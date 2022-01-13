import React from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../auth/authContext";
// import { types } from "../../types/types";

const Aside = () => {
  // const {
  //   user: { name },
  //   dispatch,
  // } = React.useContext(AuthContext);

  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   dispatch({
  //     type: types.logout,
  //   });
  //   localStorage.setItem("user", JSON.stringify(types.logout));

  //   navigate("/login");
  // };

  return (
    <>
      <aside className="cont-aside">
        <ul className="aside-space">
          <li className="aside-item">
            <Link className="aside-link" to="/categoria">Categoria</Link>
          </li>
          <li className="aside-item">
            <Link className="aside-link" to="/producto">Producto</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};
export default Aside;
