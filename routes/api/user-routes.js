const router = require("express").Router();
const {
  getAllUsers,
  getOneUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Route - /api/users
router.route("/").get(getAllUsers).post(createUser);

// Route - /api/users/:userId
router.route("/:userId").get(getOneUserById).put(updateUser).delete(deleteUser);

// Route - /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").put(addFriend).delete(removeFriend);

module.exports = router;
