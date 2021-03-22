const { db } = require("./conn");
// table name-Users

const getUsers = () => {
  return db.query("SELECT * FROM Users;").then((data) => {
    return data;
  });
};

const insertUser = (
  name,
  username,
  email,
  address,
  phone,
  website,
  company
) => {
  return db
    .query(
      "INSERT INTO Users (name, username, email, address, phone, website, company) VALUES ($1,$2,$3,$4,$5,$6,$7);",
      [name, username, email, address, phone, website, company]
    )
    .then((data) => {
      return data;
    });
};

const deleteUser = (id) => {
  return db.query("DELETE from Users WHERE id = " + id).then((data) => {
    console.log(data).catch((e) => console.log(e));
  });
};

// const editUser = (
//   name,
//   username,
//   email,
//   address,
//   phone,
//   website,
//   company,
//   id
// ) => {
//   return db
//     .query(
//       "UPDATE Users SET name=$1, username=$2, email=$3, address=$4, phone=$5, website=$6, company=$7 WHERE id=$6;",
//       [name, username, email, address, phone, website, company, id]
//     )
//     .then((data) => {
//       console.log(data).catch((e) => console.log(e));
//     });
// };

module.exports = { getUsers, insertUser, deleteUser };

// const data = db.query("SELECT * FROM Users");
// res.send(
//   data.rows.forEach((row) => {
//     console.log(row);
//   })
// );
