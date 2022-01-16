import React from "react";
import Modal from "react-modal";

import { useDispatch, useSelector } from "react-redux";

import { uiCloseModal } from "../../../actions/ui";

import {
  addNewCategoria,
  clearCategoria,
  deletecategoria,
  updatecategoria,
} from "../../../actions/categoria";

import { initialState } from "../../../helpers/initialState";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const initialSelect = Object.assign({ val: "" }, initialState);

export const CategoriaModal = () => {
  const { modalOpen } = useSelector(({ ui }) => ui);
  const { activeSelect } = useSelector(({ category }) => category);

  const [formvalues, setformvalues] = React.useState(initialSelect);
  const { nombre, val, descripcion, _id } = formvalues;

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiCloseModal());
    setformvalues(initialState);
    dispatch(clearCategoria());
  };

  React.useEffect(() => {
    if (activeSelect) {
      setformvalues(activeSelect);
    }
  }, [activeSelect]);

  const handleInputChange = ({ target }) => {
    setformvalues({ ...formvalues, [target.name]: target.value });
  };

  const handleSubmitform = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 2) {
      return;
    }
    val === "new" && dispatch(addNewCategoria({ nombre, descripcion }));
    val === "update" && dispatch(updatecategoria({ _id, nombre, descripcion }));
    val === "delete" && dispatch(deletecategoria({ _id }));

    closeModal();
  };

  Modal.setAppElement("#root");
  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={200}
        style={customStyles}
      >
        <div className="tex-bot m-b">
          <h2 className="text-h2">{`${val} Category`}</h2>

          <button className="btn btn-primary" onClick={closeModal}>
            Close
          </button>
        </div>
        {val === "new" && (
          <form className="for-dis" onSubmit={handleSubmitform}>
            <input
              className="for-inp"
              type="text"
              onChange={handleInputChange}
              value={nombre}
              placeholder="Agrega Categoria"
              name="nombre"
            />
            <input
              className="for-inp"
              type="text"
              onChange={handleInputChange}
              value={descripcion}
              placeholder="Detallar una descripción"
              name="descripcion"
            />
            <button type="submit" className="btn btn-primary w-50">
              new
            </button>
          </form>
        )}
        {val === "update" && (
          <form className="for-dis" onSubmit={handleSubmitform}>
            <input
              className="for-inp"
              type="text"
              onChange={handleInputChange}
              value={nombre}
              placeholder="Modifica el nombre"
              name="nombre"
            />
            <input
              className="for-inp"
              type="text"
              onChange={handleInputChange}
              value={descripcion}
              placeholder="Detallar una descripción"
              name="descripcion"
            />
            <button type="submit" className="btn btn-primary w-50">
              Update
            </button>
          </form>
        )}
        {val === "delete" && (
          <form className="for-dis" onSubmit={handleSubmitform}>
            <input
              className="for-inp"
              type="text"
              onChange={handleInputChange}
              value={nombre}
              placeholder="Eliminar el nombre"
              name="nombre"
            />
            <input
              className="for-inp"
              type="text"
              onChange={handleInputChange}
              value={descripcion}
              placeholder="Detallar una descripción"
              name="descripcion"
            />
            <button type="submit" className="btn btn-primary w-50">
              Delete
            </button>
          </form>
        )}
        {val === "details" && (
          <div className="con-det">
            <img
              className="img-fluid"
              src={`./assets/categoria/${nombre}.jpg`}
              alt={"foto"}
            />
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
          </div>
        )}
      </Modal>
    </>
  );
};
