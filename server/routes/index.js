const router = require("express").Router();
const authRoutes = require("./auth");
const matchesRoutes = require("./matches");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/matches", matchesRoutes);

module.exports = router;
