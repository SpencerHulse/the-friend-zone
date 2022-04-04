const { User } = require("../models");

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .populate({ path: "friends", select: "-__v" })
      .select("-__v")
      .then((userData) => res.json(userData))
      .catch((err) => res.status(400).json(err));
  },

  createUser({ body }, res) {
    User.create(body)
      .then((newUserData) => res.json(newUserData))
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
