const router = require("express").Router();
const {
  getAllUsers,
  createUser,
} = require("../../controllers/user-controller");

// Route - /api/users
router.route("/").get(getAllUsers).post(createUser);

module.exports = router;
