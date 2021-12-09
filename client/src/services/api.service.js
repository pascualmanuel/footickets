const axios = require("axios");

class APIHandler {
  constructor() {
    //Tabla de Posiciones
    this.axiosApp = axios.create({
      baseURL: "http://localhost:5005/api",
      credentials: true,
    });
  }

  getAllMatches = (country) => this.axiosApp.get(`/matches/league/${country}`);
  getTeamId = (name) => this.axiosApp.get(`/matches/team/${name}`);
  getTeamMatches = (id) => this.axiosApp.get(`/matches/team/matches/${id}`);
  //   getNextMatches = (leagueId, year, matchesNumber) =>
  //     this.axiosApp.get(
  //       `fixtures?league=${leagueId}&season=${year}&next=${matchesNumber}`
  //     );
}

module.exports = APIHandler;
