const router = require("express").Router();
const {isLoggedIn} = require("../middleware/isLoggedIn");

router.get("/team/profile/:userId/:teamId", isLoggedIn, (req, res) => {
  const {teamId} = req.params;
});
