const { connect } = require("mongoose");

connect(`${process.env.DB_MDB}`)
  .then(() => console.log("DB online"))
  .catch(() => console.log(new Error("DB not conection")));
