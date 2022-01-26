const express = require("express");
const router = express.Router();
const Users = require("../models/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const checkAuth = require("../utils/checkAuth");

//register
router.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, 10, (hash_err, hash) => {
    if (hash_err) {
      return res.status(500).json({ error: hash_err });
    } else {
      const newUser = new Users({
        ...req.body,
        password: hash,
      });
      Users.create(newUser, (err, newlyCreatedUser) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err,
          });
        } else {
          return res.status(201).json({
            message: "Registeration successful",
            result: newlyCreatedUser,
          });
        }
      });
    }
  });
});

//login
router.post("/login", (req, res) => {
  Users.find({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    } else {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(
        req.body.password,
        user[0].password,
        (auth_err, result) => {
          if (auth_err) {
            return res.status(401).json({
              message: "Auth failed",
            });
          } else if (result) {
            const token = jwt.sign(
              {
                id: user[0]._id,
                email: user[0].email,
                isPatron: user[0].isPatron,
              },
              "abhijeetsecretkey",
              {
                expiresIn: "1h",
              }
            );
            return res.status(200).json({ message: "success", token: token });
          } else {
            return res.status(401).json({
              message: "failed to fetch token",
              token: null,
            });
          }
        }
      );
    }
  });
});
module.exports = router;
