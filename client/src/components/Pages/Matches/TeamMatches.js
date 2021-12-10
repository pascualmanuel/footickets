import {useState, useEffect} from "react";
import {useParams} from "react-router";

import APIHandler from "../../../services/api.service";
import {Card, ListGroupItem, ListGroup} from "react-bootstrap";
import {AiOutlineShoppingCart} from "react-icons/ai";

const teamHandler = new APIHandler();

function TeamMatches() {
  const {teamName} = useParams();

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    teamHandler
      .getTeamId(teamName)
      .then((res) => {
        return teamHandler.getTeamMatches(res.data);
      })
      .then((res) => {
        setMatches(res.data.response);
      })
      .catch((err) => console.log(err));
  }, [teamName]);

  return (
    <>
      <h2> Proximos Partidos </h2>
      {matches.map((match) => (
        <>
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
      ))}
    </>
  );
}

export default TeamMatches;
