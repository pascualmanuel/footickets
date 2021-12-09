const router = require("express").Router();
const {isLoggedIn} = require("../middleware/isLoggedIn");

router.get("/team/profile/:id", isLoggedIn, (req, res) => {
  const {id} = req.params;
  User.findById(id)
    .then((user) => res.status(200).json(user))
    .catch((err) =>
      res.status(500).json({code: 500, message: "Error retriving user", err})
    );
});
