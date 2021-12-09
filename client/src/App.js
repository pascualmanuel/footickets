import React, {Component} from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/Layout/Navigation/NavBar";
import SignupPage from "./components/Pages/Signup/signup";
import AuthService from "./services/auth.service";
import LoginPage from "./components/Pages/Login/login";
import Matches from "./components/Pages/Matches/Matches";
import MatchDetails from "./components/Pages/matchDetails/MatchDetails";
import TeamMatches from "./components/Pages/Matches/TeamMatches";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedUser: undefined,
    };

    this.authService = new AuthService();
  }

  componentDidMount() {
    this.authService
      .isloggedin()
      .then((response) => this.storeUser(response.data))
      .catch((err) => this.storeUser(null));
  }

  storeUser = (user) => {
    this.setState({loggedUser: user});
  };

  render() {
    return (
      <>
        <NavBar storeUser={this.storeUser} loggedUser={this.state.loggedUser} />
        <main>
          <h4>TODO</h4>
          <p>
            1- Armar vista del perfil TEAM donde ve los proximos 4 partidos en
            casa. Añadir cantidad entradas a la venta.
          </p>
          <p>2- Pensar index.</p>
          <p>
            3- Cuando un equipo añade entradas el usuario pueda ver el stock de
            entradas en cada partido.
          </p>
          <p>
            4- Crear perfil para cada usuario Donde el usuario va a ver su
            historial de compras. / Ventas
          </p>
          <p>5- Pasarela de pago.</p>
          <p>6- Configurar Nodemailer.</p>
          <p>7- </p>

          <Switch>
            <Route
              path="/signup"
              render={(props) => (
                <SignupPage {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <LoginPage {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/league/:country"
              render={(props) => (
                <Matches {...props} storeUser={this.storeUser} />
              )}
            />
            <Route
              path="/match/details"
              render={(props) => <MatchDetails {...props} />}
            />
            <Route
              path="/matches/team/:teamName"
              render={(props) => <TeamMatches {...props} />}
            />
            <Route
              path="/team/role/:id"
              render={(props) => <TeamMatches {...props} />}
            />
          </Switch>
        </main>
      </>
    );
  }
}
export default App;
