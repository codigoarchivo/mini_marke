const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    // Validate email if it already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "User exists with this email",
      });
    }

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    req.body.password = bcrypt.hashSync(password, salt);

    // Create User
    const { id: uid, name } = await User.create(req.body);

    // Generate the token
    const token = generarJWT(uid, name);

    res.status(201).json({
      ok: true,
      uid,
      name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Not register",
    });
  }
};

const loginUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    // Validate email if it doesn't exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "User does not exist with this email",
      });
    }

    // Compare the passwords
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password in correct",
      });
    }

    // Generate the token
    const token = generarJWT(user.id, user.name);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};
const revalidateToken = (req, res = response) => {
  // Create new token
  const token = generarJWT(req.uid, req.name);

  res.json({
    ok: true,
    uid: req.uid,
    name: req.name,
    token,
  });
};
module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
