const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {
  const token = req.header("x-access-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "There is no token in the request",
    });
  }
  
  try {
    // verify token
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT);
    (req.uid = uid), (req.name = name);
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Invalid token",
    });
  }
  next();
};

module.exports = {
  validateJWT,
};
