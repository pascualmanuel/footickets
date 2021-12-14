import React, {useState} from "react";
import Logo from "../../../assets/ft-logo.png";
import {Link} from "react-router-dom";
import AuthService from "../../../services/auth.service";

import {
  Button,
  Container,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Nav,
} from "react-bootstrap";

const authService = new AuthService();

const Navigation = ({loggedUser, storeUser}) => {
  const logout = () => {
    authService
      .logout()
      .then((response) => storeUser(null))
      .catch((err) => console.log(err));
  };

  const [teamName, setTeamName] = useState("");

  const handleChange = (e) => {
    setTeamName(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" style={{width: "35px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: "600px"}}
            navbarScroll
          >
            <NavDropdown title="Perfil" id="navbarScrollingDropdown">
              {!loggedUser ? (
                <>
                  <NavDropdown.Item as={Link} to="/login">
                    Iniciar Sesion
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/signup">
                    Registro
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  {loggedUser.role === "STANDARD" && (
                    <NavDropdown.Item to="#action3">
                      Últimas Compras
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item to="#action4">
                    Editar perfil
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={"span"} onClick={logout}>
                    Cerrar Sesion
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
            <NavDropdown title="Ligas" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/league/england">
                Premier League
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/league/spain">
                LaLiga
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/league/italy">
                Serie A
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/league/germany">
                Bundesliga
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/league/france">
                League 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link to="#Tickets">Tickets</Nav.Link>
            <Nav.Link to="#Tickets"></Nav.Link>
            {loggedUser && loggedUser.role === "TEAM" && (
              <NavDropdown title="Mi equipo" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/team/profile">
                  Partidos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/#">
                  Ventas
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex">
            <FormControl
              type="search"
              placeholder="Busqueda por equipo"
              className="me-2"
              aria-label="Search"
              name="teamName"
              value={teamName}
              onChange={handleChange}
            />
            <Button variant="outline-success">
              <Link to={`/matches/team/${teamName}`}>Buscar</Link>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
