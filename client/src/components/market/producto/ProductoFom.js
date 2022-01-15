import React from "react";
import { useSelector } from "react-redux";

export const ProductoFom = ({
  handleSubmitform,
  handleInputChange,
  formvalues,
  setformvalues,
  nombre,
  categoria,
  stock,
  precio,
  val,
}) => {
  const { activelist } = useSelector(({ product }) => product);

  const [formList, setformList] = React.useState([]);

  React.useEffect(() => {
    if (activelist) setformList(activelist);
  }, [activelist]);

  return (
    <>
      <form className="for-dis" onSubmit={handleSubmitform}>
        <input
          className="for-inp"
          type="text"
          onChange={handleInputChange}
          value={nombre}
          placeholder="Producto"
          name="nombre"
        />
        {/* <div className="form-row">
              <label className="text-white">Select Image :</label>
              <input
                type="file"
                className="form-control"
                value={foto}
                name="foto"
                onChange={handleInputChange}
              />
            </div> */}
        <select
          className="for-inp"
          value={categoria}
          onChange={({ target }) =>
            setformvalues({
              ...formvalues,
              categoria: target.value,
            })
          }
        >
          <option>Seleccione Categoria</option>
          {formList.map((val) => (
            <option key={val.nombre} value={val._id}>
              {val.nombre}
            </option>
          ))}
        </select>
        <input
          className="for-inp"
          type="text"
          onChange={handleInputChange}
          value={stock}
          placeholder="Stock"
          name="stock"
        />
        <input
          className="for-inp"
          type="text"
          onChange={handleInputChange}
          value={precio}
          placeholder="Precio"
          name="precio"
        />
        <button type="submit" className="btn btn-primary w-50">
          {val}
        </button>
      </form>
    </>
  );
};
