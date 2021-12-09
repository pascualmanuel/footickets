import APIHandler from "../../../services/api.service";
import {useState, useEffect} from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Button,
  ButtonGroup,
} from "react-bootstrap";

// import {useParams} from "react-router";
// import {Card, ListGroupItem, ListGroup} from "react-bootstrap";
const teamHandler = new APIHandler();

function TeamProfile(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    teamHandler
      .getTeamMatches(props.loggedUser.team_id)
      .then((res) => {
        console.log("Hola", res.data);
        setMatches(res.data.response);
      })
      .catch((err) => console.log(err));
  }, [props.loggedUser.team_id]);

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
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary">-</Button>
                  <Button d variant="secondary">
                    0
                  </Button>
                  <Button variant="secondary">+</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          }
        </>
      ))}
    </>
  );
}

export default TeamProfile;

//   const {teamName} = useParams();
//   const teamHandler = new APIHandler();

//   const [matches, setMatches] = useState([]);

//   teamHandler
//     .getTeamId(teamName)
//     .then((res) => {
//       return teamHandler.getTeamMatches(res.data);
//     })
//     .then((res) => {
//       setMatches(res.data.response);
//     })
//     .catch((err) => console.log(err));
