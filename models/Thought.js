const { Schema, model, Types } = require("mongoose");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, required: true, max: 280 },
    username: { type: String, required: true },
    // Needs a get that uses Luxon preferably
    createdAt: { type: Date, default: Date.now },
  }
  // Commented out until getter is set up in createdAt
  /* {toJSON: {getters: true}} */
);

const ThoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, min: 1, max: 280 },
    // Needs a get that uses Luxon preferably
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [ReactionSchema],
  },
  // Commented out until getter added to createdAt
  { virtual: true, /* getters: true, */ id: false }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
