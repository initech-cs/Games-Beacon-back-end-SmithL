const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "the user who likes is required"],
    },
    gameId: {
      type: mongoose.Schema.ObjectId,
      ref: "Game",
      required: [true, "the game that is liked is required"],
    },
    rawgId: { type: Number, required: [true, "rawgId is necessary"] },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObjectL: { virtuals: true },
  }
);

module.exports = mongoose.model("Owned", Schema);
