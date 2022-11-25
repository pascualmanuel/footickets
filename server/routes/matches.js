const APIHandler = require("../services/APIHandler.js");
const API = new APIHandler();
const Stripe = require("stripe");
const router = require("express").Router();
const Match = require("../models/Match.model");

const stripe = new Stripe(
  "sk_test_51K6CRIH1ByOTHJYIhKQvZj6tcqIVHPvbxdYFsZK3AdkM58qPTqVHVwDkgXlHC6YU83SbtAGmEoEMOKWdJw2LB9F9002TJHvtbA"
);

// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.send(err);
// });

router.get("/get-matches", (req, res) => {
  let dbInfo = [];

  Match.find()
    .then((response) => {
      dbInfo = response;

      let promisesArr = dbInfo.map((match) => {
        return API.getMatchInfo(match.matchId).then(
          (res) => res.data.response[0]
        );
      });

      return Promise.all(promisesArr);
    })
    .then((allMatches) => {
      console.log(allMatches);
      res.json({allMatches, dbInfo});
    })
    .catch((err) => console.log(err));
});

///Copiado ya de todofutbol...

router.get("/league/:country", (req, res, next) => {
  const {country} = req.params;

  const leagueMapper = {
    wc: 1,
    spain: 140,
    argentina: 128,
    england: 39,
    italy: 135,
    france: 61,
    germany: 78,
    brazil: 71,
    mexico: 262,
    uruguay: 268,
  };

  let leagueId = leagueMapper[country];
  // const year = 2021;
  const matchesNumber = 16;

  const matchesResponse = API.getNextMatches(leagueId, matchesNumber);

  Promise.all([matchesResponse])
    .then((data) => {
      const [matchesResponse] = data;
      const matches = matchesResponse.data.response;

      console.log(matchesResponse.data.response, "marchesrespone");
      res.json(matches);
    })
    .catch((err) => console.log(err));
});

router.get("/next-matches/:country", (req, res, next) => {
  const {country} = req.params;

  const leagueMapper = {
    spain: 140,
    argentina: 128,
    england: 39,
    italy: 135,
    france: 61,
    germany: 78,
    brazil: 71,
    mexico: 262,
    uruguay: 268,
  };

  // let curr = new Date(); // get current date
  // let first = curr.getDate() - curr.getDay() + 4; // First day is the day of the month - the day of the week
  // let last = first + 5; // last day is the first day + 6

  // let thursday = new Date(curr.setDate(first));
  // let tuesday = new Date(curr.setDate(last));

  // const firstDay = format(thursday, "yyyy-MM-dd");
  // const lastDay = format(tuesday, "yyyy-MM-dd");
  // console.log("firstDay", firstDay);
  // console.log("lastDay", lastDay);

  let leagueId = leagueMapper[country];
  const year = 2021;
  const matchesNumber = 10;

  const matchesResponse = API.getNextMatches(leagueId, matchesNumber);

  Promise.all([matchesResponse])
    .then((data) => {
      console.log(data, "im dataaa");
      const [matchesResponse] = data;
      const matches = matchesResponse.data.response;
      res.json(matches);
    })
    .catch((err) => console.log(err));
});

///||||Copiado ya de todofutbol lo de arriba.

//liveFootball

// https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all

//////////////////////

router.get("/standings/:country", (req, res) => {
  const {country} = req.params;

  const leagueMapper = {
    spain: 140,
    argentina: 128,
    england: 39,
    italy: 135,
    france: 61,
    germany: 78,
    brazil: 71,
    mexico: 262,
    uruguay: 268,
  };

  let leagueId = leagueMapper[country];
  const year = 2022;

  const positionResponse = API.getPositions(leagueId, year);

  Promise.all([positionResponse])
    .then((data) => {
      const [positionResponse] = data;
      const standings = positionResponse.data.response;
      res.json(standings);
    })
    .catch((err) => console.log(err));
});
/////

router.get("/league-info/", (req, res) => {
  const {country} = req.params;

  const leagueMapper = {
    spain: 140,
    argentina: 128,
    england: 39,
    italy: 135,
    france: 61,
    germany: 78,
    brazil: 71,
    uruguay: 268,
  };

  let leagueId = leagueMapper[country];
  const year = 2021;

  const positionResponse = API.getPositions(leagueId, year);
});

///
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
    .catch((err) => console.log(err, "este es el err"));
});

//////
router.get("/team/matches/:id", (req, res) => {
  const {id} = req.params;
  const teamsAPI = new APIHandler();

  teamsAPI
    .getNextTeamMatches(id)
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err, "errrrrs"));
});

///////////////////////////////////////////////

router.get("/team-info/:name", (req, res) => {
  const {name} = req.params;
  console.log("yo soy el name: ", name);
  const teamsAPI = new APIHandler();

  teamsAPI
    .getTeamInfo(name)
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

///////////////////////////////////////////

router.post("/checkout", async (req, res) => {
  try {
    const {id, amount} = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      description: "Venta de entrada",
      // payment_method: id,
      payment_method_types: ["card"],
      confirm: true,
    });
  } catch (err) {
    console.log(err);
    res.json({message: err});
  }
});

router.get("/get-match-info/:matchId", (req, res) => {
  const {matchId} = req.params;

  API.getMatchInfo(Number(matchId))
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

module.exports = router;
