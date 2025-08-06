const express = require("express");
const { users } = require("./models/users.js");

const app = express();

/** body-parser npm package */
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/** R - READ - GET - get all users */
app.get("/users", (req, res) => {
  console.log("hi from server");
  res.json(users);
});
/** R - READ - GET - get one user with params*/
app.get("/users/:param", (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  const user = users.find((item) => item.id == id);

  if (!user) {
    res.json({ msg: "user not found" });
    return;
  }
  res.json(user);
});
/** R - READ - GET - get all user with name includes in query */
app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;

  const filterUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(q.toLowerCase());
  });

  if (filterUsers.length === 0) {
    // res.status(200).json({msg:'no users match your search'})
    // res.status(200).send("no users match your search");
    res.sendStatus(404);
    return;
  }
  res.json(filterUsers);
});

/**
 * C - CREATE - POST - add one user - name + email
 */
app.post("/users", (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  const newUser = { name, email, id: users.length + 1 };
  users.push(newUser);
  res.json(users);
});

/** API */

/** CRUD
 * C - CREATE - POST
 * R - READ - GET
 * U - UPDATE - PUT / PATCH
 * D - DELETE - DELETE
 */

/**
 * RESTful API
 * /user
 * /posts
 * GET - READ
 * POST - CREATE
 */
