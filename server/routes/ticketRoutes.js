const router = require("express").Router();
const Ticket = require("../models/Ticket.model");
const {isLoggedIn} = require("../middleware/isLoggedIn");

router.get("/get-match-info/:matchId", (req, res) => {
  const {matchId} = req.params;

  API.getMatchInfo(Number(matchId))
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

router.post(
  "/create-ticket/:price/:matchId/:number/:info/:teamHome/:teamAway",
  (req, res) => {
    const {price, matchId, number, info, teamHome, teamAway} = req.params;
    let owner;

    if (req.session.currentUser === undefined) {
      owner = "63066d6d83c7922733b837ba";
    } else {
      owner = req.session.currentUser._id;
    }

    console.log(owner, "cl de owner");
    // console.log(ticket);

    Ticket.create({
      match_id: matchId,
      totalPrice: Number(price),
      owner: owner,
      // owner: req.session.currentUser._id,
      // owner: info,
      numberOfTickets: Number(number),
      infoPurchase: info,
      teamHome: teamHome,
      teamAway: teamAway,
    })

      .then((match) => res.status(200).json(match))
      .catch((err) => res.status(500).json(err));
  }
);

module.exports = router;
