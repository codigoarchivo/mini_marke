const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./database/config");

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use("/api", require("./routes"));

app.listen(process.env.PORT, () => {
  console.log(`Conect http//localhost:${process.env.PORT}`);
});
