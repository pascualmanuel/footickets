// const APIHandler = require("../services/APIHandler.js");
const router = require("express").Router();
const transporter = require("../config/nodemailer.config");
const Ticket = require("../models/Ticket.model");

router.post("/finish/:ticketId", (req, res, next) => {
  const {ticketId} = req.params;

  // const {ticketId, match_id, numberOfTickets, totalPrice} = req.params;
  // console.log(ticketId, match_id, numberOfTickets, totalPrice, "Req.Params");

  //   const matchId = ticket.match_id

  //   const matchesResponse = API.getMatch(matchId);

  // Promise.all([matchesResponse])
  //     .then((data) => {
  //       const [matchesResponse] = data;
  //       //   const standings = positionsResponse.data.response[0].league.standings[0]; // TODO: queremos uno o todos los que haya?? el 'ultimo [0]
  //       const matches = matchesResponse.data.response;
  //       res.json(matches);
  //       //!! Conversion a Boolean
  //     })
  //     .catch((err) => console.log(err));
  // });

  Ticket.findById(ticketId)
    .populate("owner")
    .then((ticket) => {
      const email = ticket.owner.email;
      const subject = "Compra de entradas";
      const message =
        "Enhorabuena ya tienes tus entradas en taquilla, pasate cuando quieras entre las 9 y 14 horas.";
      console.log(ticket.match_id, "MatchId2");

      const matchId = ticket.match_id;

      res.status(200).json(ticket);

      transporter.sendMail({
        from: '"Pena Mail" <frediybego@gmail.com>',
        to: `${email}`,
        subject: `${subject}`,
        text: `${message}`,
        html: `<b>${message} MatchID</b>  `,
      });
    });
});

module.exports = router;
