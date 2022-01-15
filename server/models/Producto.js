const { Schema, model } = require("mongoose");

const ProductoSchema = Schema(
  {
    categoria: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Categoria",
    },
    nombre: {
      type: String,
      maxlength: 50,
      unique: true,
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
      data: Buffer,
      contentType: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Producto", ProductoSchema);
