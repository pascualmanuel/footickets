const axios = require("axios");

class APIHandler {
  constructor() {
    //Tabla de Posiciones
    this.axiosApp = axios.create({
      baseURL: "http://localhost:5005/api",
      withCredentials: true,
    });
  }

  getAllMatches = (country) => this.axiosApp.get(`/matches/league/${country}`);
  getTeamId = (name) => this.axiosApp.get(`/matches/team/${name}`);
  getTeamMatches = (id) => this.axiosApp.get(`/matches/team/matches/${id}`);
  checkMatch = (matchId) =>
    this.axiosApp.get(`/team-profile/check-match/${matchId}`);
  createMatch = (match) =>
    this.axiosApp.post(`/team-profile/create-match`, match);
  createTicket = (price, matchId, number) =>
    this.axiosApp.post(`/tickets/create-ticket/${price}/${matchId}/${number}`);
  sendEmail = (ticketId) => this.axiosApp.post(`/checkout/finish/${ticketId}`);
}

module.exports = APIHandler;
