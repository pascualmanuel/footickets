const router = require("express").Router();
const {isLoggedIn} = require("../middleware/isLoggedIn");

router.post("/team/profile/:userId/:teamId", isLoggedIn, (req, res) => {
  const {teamId} = req.params;
  const {capacity, price} = req.body;

  //llamar a match.create para crear un nuevo elemento match  en la bbdd pasandole todo lo que tiene el
  //modelo
});
