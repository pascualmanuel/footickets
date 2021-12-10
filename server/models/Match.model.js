const {Schema, model} = require("mongoose");

const matchModel = new Schema(
  {
    matchId: {
      type: String,
    },
    price: {
      type: Number,
      // required: true,
    },
    teamOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    capacity: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Match = model("Match", matchModel);

module.exports = Match;
