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

// const initialSelect = Object.assign({ val: "" }, initialStateP);

export const ProductoModal = () => {
  const { modalOpen } = useSelector(({ ui }) => ui);
  const { activeSelect } = useSelector(({ product }) => product);
  const [formvalues, setformvalues] = React.useState(initialStateP);

  const { nombre, val, stock, precio, categoria, foto } = formvalues;
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiCloseModal());
    setformvalues(initialStateP);
    dispatch(clearProducto());
  };

  React.useEffect(() => {
    if (activeSelect) setformvalues(activeSelect);
  }, [activeSelect]);

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
    val === "update" && dispatch(updateProducto(formvalues));
    val === "delete" && dispatch(deleteProducto(formvalues));

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
              val={val}
            />
          )}
          {val === "details" && (
            <div>
              <ul>
                <li>{nombre}</li>
                <li>{stock}</li>
                <li>{precio}</li>
                {/* <li>{categoria}</li> */}
              </ul>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
