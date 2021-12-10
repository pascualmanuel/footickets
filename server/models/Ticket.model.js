const {Schema, model} = require("mongoose");

const ticketModel = new Schema(
  {
    owner: {type: Schema.Types.ObjectId, ref: "Match"},
    match_id: {type: Schema.Types.ObjectId, ref: "Match"},
  },
  {
    timestamps: true,
  }
);

const Ticket = model("Ticket", ticketModel);

module.exports = Ticket;
