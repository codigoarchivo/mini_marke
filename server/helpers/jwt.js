const jwt = require("jsonwebtoken");

const generarJWT = (uid, name) => {
  const payload = { uid, name };
  return jwt.sign(payload, process.env.SECRET_JWT, {
    expiresIn: "2h",
  });
};

module.exports = {
  generarJWT,
};
