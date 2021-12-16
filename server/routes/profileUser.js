const router = require("express").Router();
const User = require("../models/User.model");
const Ticket = require("../models/Ticket.model");

router.get("/UserTickets", (req, res) => {
  Ticket
  .find({owner: req.session.currentUser._id})
  .then((userTickets) => res.status(200).json(userTickets))
  .catch((err) => {
    res.status(500).json({ code: 500, message: "Error", err })
  });
});

router.get("/:id",(req, res) => {
  const { id } = req.params;
  User
    .findById(id)
    .populate("ticket_id")
    .then((user) => res.status(200).json({ user, message: "user" }))
    .catch((err) => res.status(500).json({ code: 500, message: "Error", err }));
});



module.exports = router