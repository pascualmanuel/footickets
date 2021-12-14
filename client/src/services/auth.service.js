import axios from "axios";

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5005/api/auth",
      withCredentials: true,
    });
  }

  signup = (username, password, email, team_id) =>
    this.app.post("/signup", {username, password, email, team_id});
  login = (username, password) => this.app.post("/login", {username, password});
  logout = () => this.app.get("/logout");
  isloggedin = () => this.app.get("/isloggedin");
}

export default AuthService;
