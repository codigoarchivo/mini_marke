const { Schema, model } = require("mongoose");

const ProductoSchema = new Schema({
  categoria: {
    type: Schema.ObjectId,
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
});

module.exports = model("Producto", ProductoSchema);
