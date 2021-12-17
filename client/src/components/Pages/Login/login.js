import React, {Component} from "react";
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import AuthService from "../../../services/auth.service";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.authService = new AuthService();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.authService
      .login(this.state.username, this.state.password)
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
      <>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col md={{span: 4, offset: 4}}>
            <h2> Iniciar Sesion</h2>
            <hr></hr>
            <br></br>
            <br></br>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.username}
                  name="username"
                  type="text"
                  placeholder="Elige un nombre de usuario"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  name="password"
                  type="password"
                  placeholder="*******"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Iniciar Sesión
              </Button>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export default LoginPage;
