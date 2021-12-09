const {Schema, model} = require("mongoose");

const matchModel = new Schema(
  {
    homeName: {
      type: String,
      required: true,
    },
    awayName: {
      type: String,
      required: true,
    },
    homeLogo: {
      type: String,
      required: true,
    },
    awayLogo: {
      type: String,
      required: true,
    },
    competitionLogo: {
      type: String,
      required: true,
    },
    stadiumName: {
      type: String,
      required: true,
    },
    stadiumAddress: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    buyerName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Match = model("Match", matchModel);

module.exports = Match;
