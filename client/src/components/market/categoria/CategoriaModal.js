import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../../actions/ui";

import {
  addNewCategoria,
  deletecategoria,
  updatecategoria,
} from "../../../actions/categoria";

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

const initialSelect = { _id: "", nombre: "", val: "" };

export const CategoriaModal = () => {
  const { modalOpen } = useSelector(({ ui }) => ui);
  const { activeSelect } = useSelector(({ category }) => category);
  const [formvalues, setformvalues] = React.useState(initialSelect);

  const { nombre, val } = formvalues;

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiCloseModal());
    setformvalues(initialSelect);
  };

  React.useEffect(() => {
    if (activeSelect) {
      setformvalues({
        _id: activeSelect._id,
        nombre: activeSelect.nombre,
        val: activeSelect.val,
      });
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

    val === "new" && dispatch(addNewCategoria({ nombre }));
    val === "update" && dispatch(updatecategoria(formvalues));
    val === "delete" && dispatch(deletecategoria(formvalues));

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
        <h2>{`${val} Category`}</h2>
        <button className="btn" onClick={closeModal}>
          close
        </button>
        <div>I am a modal</div>
        {val === "new" && (
          <form onSubmit={handleSubmitform}>
            <input
              type="text"
              onChange={handleInputChange}
              value={nombre}
              placeholder="Agrega Categoria"
              name="nombre"
            />
            <button type="submit" className="btn">
              new
            </button>
          </form>
        )}
        {val === "update" && (
          <form onSubmit={handleSubmitform}>
            <input
              type="text"
              onChange={handleInputChange}
              value={nombre}
              placeholder="Modifica el nombre"
              name="nombre"
            />
            <button type="submit" className="btn">
              Update
            </button>
          </form>
        )}
        {val === "delete" && (
          <form onSubmit={handleSubmitform}>
            <input
              type="text"
              onChange={handleInputChange}
              value={nombre}
              placeholder="Eliminar el nombre"
              name="nombre"
            />
            <button type="submit" className="btn">
              Delete
            </button>
          </form>
        )}
        {val === "details" && (
          <div>
            <h1>{nombre}</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};
