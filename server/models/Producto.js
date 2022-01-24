const { Schema, model } = require("mongoose");

const ProductoSchema = new Schema(
  {
    categoria: {
      type: Schema.Types.ObjectId,
      ref: "Categoria",
    },
    nombre: {
      type: String,
      maxlength: 50,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    precio: {
      type: Number,
      require: true,
    },
    foto: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Producto", ProductoSchema);
