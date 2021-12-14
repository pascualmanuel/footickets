const router = require("express").Router();
const Match = require("../models/Match.model");
const {isLoggedIn} = require("../middleware/isLoggedIn");

router.get("/check-match/:id", (req, res) => {
  const {id} = req.params;

  Match.find({
    matchId: id,
  })
    .then((match) => res.status(200).json(match))
    .catch((err) => res.status(500).json(err));
});

router.post("/create-match", (req, res) => {
  const {matchId, price, capacity} = req.body;

  Match.create({
    matchId,
    price,
    teamOwner: req.session.currentUser._id,
    capacity,
  })
    .then((match) => res.status(200).json(match))
    .catch((err) => res.status(500).json(err));
});

router.post("/update-match", (req, res) => {
  console.log(req.body);
  const {id, price, capacity} = req.body;
  const match = {price, capacity};

  Match.findByIdAndUpdate(id, match, {new: true})
    .then((match) => res.status(200).json(match))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
