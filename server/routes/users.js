const express = require("express");
const router = express.Router();

const users = require("../../database/index");

// const axios = require("axios");
// const postAPI = "https://jsonplaceholder.typicode.com";

// localhost/routes
router.get("/", (req, res) => {
  res.send("It's working fine!");
});

// localhost/user-list
router.get("/users", async function (req, res) {
  const data = await users.getUsers();
  res.send(data);
});

router.post("/postuser", async function (req, res) {
  const data = req.body;
  users.insertUser(
    data.name,
    data.username,
    data.email,
    data.address,
    data.phone,
    data.website,
    data.company
  );
});

router.delete("/del/:id", async function (req, res) {
  const data = req.params.id;
  users.deleteUser(data);
  console.log("Delete Alert!");
});

router.post("/edit", async function (req, res) {
  const data = req.body;
  const id = data.id;
  const name = data.name;
  const username = data.username;
  const email = data.email;
  const address = data.address;
  const phone = data.phone;
  const website = data.website;
  const company = data.company;
  users.editUser(name, username, email, address, phone, website, company, id);
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
