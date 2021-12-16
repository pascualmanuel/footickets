const router = require("express").Router();
const authRoutes = require("./auth");
const matchesRoutes = require("./matches");
const teamProfileRoutes = require("./teamProfile");
const ticketRoutes = require("./ticketRoutes");
const nodemailerRoutes = require("./nodemailerRoutes");
const profileUserRoutes = require("./profileUser")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/matches", matchesRoutes);
router.use("/team-profile", teamProfileRoutes);
router.use("/tickets", ticketRoutes);
router.use("/checkout", nodemailerRoutes);
router.use("/profile-user", profileUserRoutes)

module.exports = router;
