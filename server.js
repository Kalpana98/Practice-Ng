const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const users = require("./server/routes/users");

app.use(express.static(path.join(__dirname, "dist/project1")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/routes", users);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/project1/index.html"));
});

app.listen(port, () => {
  console.log(`Litening on port: ${port}`);
});
