const { db } = require("./conn");
// table name-Users

const getUsers = () => {
  return db.query("SELECT * FROM Users;").then((data) => {
    return data;
  });
};

// const data = db.query("SELECT * FROM Users");
// res.send(
//   data.rows.forEach((row) => {
//     console.log(row);
//   })
// );

module.exports = { getUsers };
