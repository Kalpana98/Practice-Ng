const express = require("express");
const router = express.Router();

const users = require("../../database/index");

// const axios = require("axios");
// const postAPI = "https://jsonplaceholder.typicode.com";

// localhost/routes
router.get("/", (req, res) => {
  res.send("It's working!");
});

// localhost/user-list
// Get users from Database
router.get("/users", async function (req, res) {
  const data = await users.getUsers();
  res.send(data);
});

// *******************Get data rom API
// router.get("/users", (req, res) => {
//   axios
//     .get(`${postAPI}/users`)
//     .then((users) => {
//       // console.log(users.data);
//       res.status(200).json(users.data); //send(users.data)
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

module.exports = router;
