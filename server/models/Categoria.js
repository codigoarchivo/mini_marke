const { Schema, model } = require("mongoose");

const CategoriaSchema = new Schema({
  nombre: {
    type: String,
    maxlength: 50,
    unique: true,
    require: true,
  },
});

module.exports = model("Categoria", CategoriaSchema);
