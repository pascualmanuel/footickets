const {Schema, model, SchemaTypes} = require("mongoose");
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      // required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      // required: true,
    },

    country: {
      type: String,
    },
    league: {
      type: String,
    },
    team: {
      type: String,
    },

    img: {type: String},

    team_id: {
      type: Number,
    },

    ticket_id: [{type: Schema.Types.ObjectId, ref: "Ticket"}],

    role: {
      type: String,
      required: true,
      enum: ["STANDARD", "TEAM", "PM"],
      default: "STANDARD",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
