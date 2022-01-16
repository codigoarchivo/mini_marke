import React from "react";
import Modal from "react-modal";

import { useDispatch, useSelector } from "react-redux";

import { uiCloseModal } from "../../../actions/ui";

import {
  addNewProducto,
  clearProducto,
  deleteProducto,
  updateProducto,
} from "../../../actions/producto";

import { initialStateP } from "../../../helpers/initialState";

import { ProductoFom } from "./ProductoFom";

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

export const ProductoModal = () => {
  const { modalOpen } = useSelector(({ ui }) => ui);
  const { activeSelect } = useSelector(({ product }) => product);
  const [formvalues, setformvalues] = React.useState(initialStateP);
  const { nombre, val, stock, precio, categoria, _id, foto } = formvalues;

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiCloseModal());
    setformvalues(initialStateP);
    dispatch(clearProducto());
  };

  React.useEffect(() => {
    if (activeSelect) {
      setformvalues(activeSelect);
    } else {
      setformvalues(initialStateP);
    }
  }, [activeSelect, setformvalues]);

  const handleInputChange = ({ target }) => {
    setformvalues({ ...formvalues, [target.name]: target.value });
  };

  const handleSubmitform = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 2) {
      return;
    }

    val === "new" &&
      dispatch(addNewProducto({ nombre, stock, precio, categoria, foto }));
    val === "update" &&
      dispatch(updateProducto({ nombre, stock, precio, categoria, _id }));
    val === "delete" && dispatch(deleteProducto());

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
          <h2 className="text-h2">{`${val} Product`}</h2>

          <button className="btn btn-primary " onClick={closeModal}>
            Close
          </button>
        </div>

        <div>
          {val === "new" && (
            <ProductoFom
              handleSubmitform={handleSubmitform}
              handleInputChange={handleInputChange}
              setformvalues={setformvalues}
              formvalues={formvalues}
              formList={setformvalues}
              nombre={nombre}
              categoria={categoria}
              stock={stock}
              precio={precio}
              foto={foto}
              val={val}
            />
          )}
          {val === "update" && (
            <ProductoFom
              handleSubmitform={handleSubmitform}
              handleInputChange={handleInputChange}
              setformvalues={setformvalues}
              formvalues={formvalues}
              formList={setformvalues}
              nombre={nombre}
              categoria={categoria}
              stock={stock}
              precio={precio}
              foto={foto}
              val={val}
            />
          )}
          {val === "delete" && (
            <ProductoFom
              handleSubmitform={handleSubmitform}
              handleInputChange={handleInputChange}
              setformvalues={setformvalues}
              formvalues={formvalues}
              formList={setformvalues}
              nombre={nombre}
              categoria={categoria}
              stock={stock}
              precio={precio}
              foto={foto}
              val={val}
            />
          )}
          {val === "details" && (
            <div className="con-det">
              <img
                className="img-fluid"
                src={`./assets/categoria/${categoria.nombre}.jpg`}
                alt={"foto"}
              />
              <h1>{nombre}</h1>{" "}
              <ul className="con-ul">
                <li>{categoria.nombre}</li>
                <li>{stock}</li>
                <li>${precio}</li>
              </ul>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
