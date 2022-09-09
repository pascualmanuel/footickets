const axios = require("axios");

class APIHandler {
  constructor() {
    //Tabla de Posiciones
    this.axiosApp = axios.create({
      baseURL: "https://api-football-v1.p.rapidapi.com/v3/",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_KEY,
      },
    });
  }

  getNextMatches = (leagueId, matchesNumber) =>
    this.axiosApp.get(`fixtures?league=${leagueId}&next=${matchesNumber}`);

  getPositions = (leagueId, year) =>
    this.axiosApp.get(`standings?league=${leagueId}&season=${year}`);

  getLeagues = (country) =>
    this.axiosApp.get(`leagues?country=${country}&type=league`);

  getTeams = (id) => this.axiosApp.get(`teams?league=${id}&season=2022`);

  getUserTeam = (id) => this.axiosApp.get(`teams?id=${id}`);

  getTopScorers = (id) =>
    this.axiosApp.get(`players/topscorers?league=${id}&season=2022`);

  getTeamId = (name) => this.axiosApp.get(`/teams?name=${name}`);

  getTeamPlayers = (teamId) =>
    this.axiosApp.get(`players/squads?team=${teamId}`);

  getTeamCoach = (teamId) => this.axiosApp.get(`coachs/squads?team=${teamId}`);

  getLastMatches = (leagueId, teamId) =>
    this.axiosApp.get(`fixtures?league=${leagueId}&team=${teamId}&last=5`);

  getTeamInfo = (name) => this.axiosApp.get(`teams?search=${name}`);

  // getTeamInfo = (id) => this.axiosApp.get(`teams?=${id}`);

  getChampionsLeague = () =>
    this.axiosApp.get(`standings?season=2021&league=2`);

  getNextTeamMatches = (teamId) =>
    this.axiosApp.get(`fixtures?team=${teamId}&next=6`);

  getMatch = (teamId) => this.axiosApp.get(`fixtures?id=${teamId}`);

  getMatchInfo = (matchId) => this.axiosApp.get(`fixtures?id=${matchId}`);
}

module.exports = APIHandler;
