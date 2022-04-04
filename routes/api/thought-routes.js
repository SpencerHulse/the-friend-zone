const router = require("express").Router();
const {
  getAllThoughts,
  getOneThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Route - /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// Route - /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getOneThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Route - /api/thoughts/:thoughtId/reactions

// Route - /api/thoughts/:thoughtId/reactions/:reactionId

module.exports = router;
