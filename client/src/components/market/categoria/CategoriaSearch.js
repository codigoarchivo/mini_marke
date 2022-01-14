import React from "react";
import { useDispatch } from "react-redux";
import { categoriaSearchLoading } from "../../../actions/categoria";

export const CategoriaSearch = () => {
  const [formvalues, setformvalues] = React.useState({ serchText: "" });
  const { serchText } = formvalues;

  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    setformvalues({ ...formvalues, [target.name]: target.value });
  };

  const handleSerch = (e) => {
    e.preventDefault();
    dispatch(categoriaSearchLoading(serchText));
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
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
