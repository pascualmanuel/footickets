const {Schema, model} = require("mongoose");

const ticketModel = new Schema(
  {
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    match_id: {type: String},
    numberOfTickets: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
  },
  {
    timestamps: true,
  }
);

const Ticket = model("Ticket", ticketModel);

module.exports = Ticket;
