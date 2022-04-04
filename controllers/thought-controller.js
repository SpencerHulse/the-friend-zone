const res = require("express/lib/response");
const { Thought, User } = require("../models");

const thoughtController = {
  // Get all thoughts, including reactions
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },

  // Get a single thought and its reactions
  getOneThoughtById() {},

  // Add a new thought to a user
  createThought({ body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "There is no user with this ID" });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  // Update a thought using its ID
  updateThought() {},

  // Delete a thought using its ID
  deleteThought() {},

  // Update a thought to add a reaction to the thought
  addReaction() {},

  // Update a thought to delete a reaction from the thought
  removeReaction() {},
};

module.exports = thoughtController;
