const express = require("express");
const router = express.Router();

const axios = require("axios");

const postAPI = "https://jsonplaceholder.typicode.com";

router.get("/", (req, res) => {
  res.send("It's working!");
});

router.get("/users", (req, res) => {
  axios
    .get(`${postAPI}/users`)
    .then((users) => {
      // console.log(users.data);
      res.status(200).json(users.data); //send(users.data)
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
