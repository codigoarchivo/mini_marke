import React from "react";
import { useDispatch } from "react-redux";
import { productoSearchLoading } from "../../../actions/producto";

import icons3 from "../../../ico/icons3.png";

export const ProductoSearch = () => {
  const [formvalues, setformvalues] = React.useState({ serchText: "" });
  const { serchText } = formvalues;

  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    setformvalues({ ...formvalues, [target.name]: target.value });
  };

  const handleSerch = (e) => {
    e.preventDefault();
    dispatch(productoSearchLoading(serchText));
  };

  return (
    <>
      <form onSubmit={handleSerch}>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              onChange={handleInputChange}
              value={serchText}
              name="serchText"
              className="searchTerm"
              placeholder="Search by name"
            />
            <button type="submit" className="searchButton">
              <img
                className="ico-img"
                style={{
                  width: "25px",
                  display: "flex",
                }}
                src={icons3}
                alt="Foto"
              />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
