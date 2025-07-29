const { Router } = require("express");
const {
  getAllUsers,
  getOneUser,
  searchAUser,
  createUser,
} = require("../controllers/usersController.js");

const router = Router();

/** R - READ - GET - get all users */
router.get("/users", getAllUsers);

/** R - READ - GET - get one user with params*/
router.get("/users/:param", getOneUser);

/** R - READ - GET - get all user with name includes in query */
router.get("/search", searchAUser);

/**
 * C - CREATE - POST - add one user - name + email
 */
router.post("/users", createUser);

module.exports = router;
