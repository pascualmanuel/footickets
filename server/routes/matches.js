const APIHandler = require("../services/APIHandler.js");
const API = new APIHandler();
const router = require("express").Router();
const Match = require("../models/Match.model");

router.get("/league/:country", (req, res, next) => {
  const {country} = req.params;

  const leagueMapper = {
    spain: 140,
    argentina: 128,
    england: 39,
    italy: 135,
    france: 61,
    germany: 78,
  };

  let leagueId = leagueMapper[country];
  const year = 2021;
  const matchesNumber = 18;

  const matchesResponse = API.getNextMatches(leagueId, year, matchesNumber);

  Promise.all([matchesResponse])
    .then((data) => {
      const [matchesResponse] = data;
      //   const standings = positionsResponse.data.response[0].league.standings[0]; // TODO: queremos uno o todos los que haya?? el 'ultimo [0]
      const matches = matchesResponse.data.response;
      //   console.log(matches[0].fixture.venue.name);
      //   const allScorers = allScorersResponse.data.response;
      //   const topScorers = allScorers.slice(0, 10);
      res.json(matches);
      //!! Conversion a Boolean
    })
    .catch((err) => console.log(err));
});

router.get("/match/:id", (req, res) => {
  const {id} = req.params;

  Match.findById(id)
    .then((matchDetails) => res.json(matchDetails))
    .catch((err) =>
      res.json({err, errMessage: "Problema buscando un Match de tinder"})
    );
});

router.get("/team/:name", (req, res) => {
  const {name} = req.params;
  const teamsAPI = new APIHandler();

  teamsAPI
    .getTeamId(name)
    .then((response) => res.json(response.data.response[0].team.id))
    .catch((err) => console.log(err));
});

router.get("/team/matches/:id", (req, res) => {
  const {id} = req.params;
  const teamsAPI = new APIHandler();

  teamsAPI
    .getNextTeamMatches(id)
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

module.exports = router;
