import React, {Component} from "react";
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import AuthService from "../../../services/auth.service";

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      team_id: "",
    };

    this.authService = new AuthService();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.authService
      .signup(
        this.state.username,
        this.state.password,
        this.state.email,
        this.state.team_id
      )
      .then((response) => {
        this.props.storeUser(response.data);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err.response.data.message));
  };

  handleInputChange = (e) => {
    const {name, value} = e.currentTarget;

    this.setState({[name]: value});
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{span: 4, offset: 4}}>
            <h2>Registro</h2>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.username}
                  name="username"
                  type="text"
                  placeholder="Elige un nombre de usuario"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  name="email"
                  type="text"
                  placeholder="example@gmail.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="team_id">
                <Form.Label>IdTeam</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.team_id}
                  name="team_id"
                  type="number"
                  placeholder="prueba"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupPage;
