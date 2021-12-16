import React, { Component } from "react";
import { Form, Row, Col, Container, Button, Table, Card } from "react-bootstrap";
import ProfileService from "../../services/profile.service";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: undefined,
        tickets: [],
        saved: false
    };
    this.profileService = new ProfileService();

  }

  componentWillMount() {
    this.profileService.getProfile(this.props.loggedUser._id)
        .then(response => this.setState({user: response.data.user}))
        .catch(err => console.log(err))

        this.profileService.getTicketProfile()
        .then(response => {
            console.log(response.data)
            this.setState({tickets: response.data})
        })
        .catch(err => console.log(err))
  
  }

  

  render() {
    return this.props.loggedUser ? (
      <Container className="conteiner-profile">
       <Card style={{width: "18rem"}}>
      <Card.Body>
        <Card.Title>
         Tu perfil
        </Card.Title>
        <Card.Text>
            Name: {this.state.user?.username}
            <hr />
            Tus ventas: {this.state.tickets.map(ticket => {
                return (
                    <>
                <p>Número de entradas: {ticket.numberOfTickets}</p>
                <p>Precio de entradas: {ticket.totalPrice}</p>
                    </>
                )
              })}
        </Card.Text>
      </Card.Body>

      
    </Card>
      </Container>
    ) :
    "Loading"
    }
}

export default Profile;