const { users } = require("../models/users.js");

const getAllUsers = (req, res) => {
  console.log("hi from server");
  res.json(users);
};

const getOneUser = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const user = users.find((item) => item.id == id);

  if (!user) {
    res.json({ msg: "user not found" });
    return;
  }
  res.json(user);
};

const searchAUser = (req, res) => {
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
};

const createUser = (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  const newUser = { name, email, id: users.length + 1 };
  users.push(newUser);
  res.json(users);
};

module.exports = {
    getAllUsers,
    getOneUser,
    searchAUser,
    createUser
}