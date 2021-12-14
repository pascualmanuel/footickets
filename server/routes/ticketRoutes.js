const router = require("express").Router();
const Ticket = require("../models/Ticket.model");
const {isLoggedIn} = require("../middleware/isLoggedIn");

router.post("/create-ticket/:price/:matchId/:number", (req, res) => {
  const {matchId, price, number} = req.params;

  Ticket.create({
    match_id: matchId,
    totalPrice: Number(price),
    owner: req.session.currentUser._id,
    numberOfTickets: Number(number),
  })
    .then((match) => res.status(200).json(match))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
