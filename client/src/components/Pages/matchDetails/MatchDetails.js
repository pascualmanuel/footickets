// import APIHandler from "../../../services/api.service";
// import {useParams} from "react-router";
// import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {Card, ListGroupItem, ListGroup} from "react-bootstrap";
import {AiOutlineShoppingCart} from "react-icons/ai";

function MatchesDetails() {
  const location = useLocation();
  const {match} = location.state;
  console.log(match);

  return (
    <>
      <h1>Lista de partidos</h1>
      {
        <Card style={{width: "18rem"}}>
          <Card.Body>
            <Card.Title>
              <img
                src={match?.teams.home.logo}
                alt="hola"
                style={{width: "20px"}}
              />
              {match?.teams.home.name} vs
              <img
                src={match?.teams.away.logo}
                alt="hola"
                style={{width: "20px"}}
              />
              {match?.teams.away.name}
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{match?.fixture.date}</ListGroupItem>
            <ListGroupItem>{match?.league.round}</ListGroupItem>
            <ListGroupItem>{match?.fixture.venue.name}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">
              Comprar entrada
              <AiOutlineShoppingCart />
            </Card.Link>
          </Card.Body>
        </Card>
      }
    </>
  );
}

export default MatchesDetails;
