import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { startUploading } from "../../../actions/producto";

export const ProductoFom = ({
  handleSubmitform,
  handleInputChange,
  formvalues,
  setformvalues,
  categoria,
  nombre,
  precio,
  stock,
  val,
}) => {
  const { activelist } = useSelector(({ product }) => product);

  const dispatch = useDispatch();

  const [formList, setformList] = React.useState([]);
  React.useEffect(() => {
    if (activelist) {
      setformList(activelist);
    } else {
      setformList([]);
    }
  }, [activelist, setformList]);

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    const imgsize = target.files[0].size;
    if (imgsize > 500000) {
      Swal.fire("Error", "La imagen debe pesar menos de 500kb", "error");
    } else {
      dispatch(startUploading(file));
    }
  };
  return (
    <>
      <div className="form-cont">
        <input
          id="fileSelector"
          name="file"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <div>
          <button className="btn btn-primary" onClick={handlePictureClick}>
            Agrega una Imagen
          </button>
        </div>
      </div>
      <form className="for-dis" onSubmit={handleSubmitform}>
        <input
          className="for-inp"
          type="text"
          onChange={handleInputChange}
          value={nombre}
          placeholder="Producto"
          name="nombre"
        />
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
