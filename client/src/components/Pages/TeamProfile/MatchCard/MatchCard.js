import {useState} from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

// import {useParams} from "react-router";
// import {Card, ListGroupItem, ListGroup} from "react-bootstrap";

function TeamProfile(props) {
  const [capacity, setCapacity] = useState(0);

  const handleClick = (e, operation) => {
    if (operation === "add") {
      setCapacity(Number(capacity) + 1);
    } else {
      capacity === 0 ? setCapacity(0) : setCapacity(Number(capacity) - 1);
    }
    console.log(props.match.fixture.id);
  };

  const handleInputChange = (e) => {
    setCapacity(e.currentTarget.value);
  };

  return (
    <>
      {
        <Card style={{width: "18rem"}}>
          <Card.Body>
            <Card.Title>
              <img
                src={props.match?.teams.home.logo}
                alt="hola"
                style={{width: "20px"}}
              />
              {props.match?.teams.home.name} vs
              <img
                src={props.match?.teams.away.logo}
                alt="hola"
                style={{width: "20px"}}
              />
              {props.match?.teams.away.name}
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{props.match?.fixture.date}</ListGroupItem>
            <ListGroupItem>{props.match?.league.round}</ListGroupItem>
            <ListGroupItem>{props.match?.fixture.venue.name}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <InputGroup className="mb-3">
              <Button
                onClick={(e) => handleClick(e, "remove")}
                variant="outline-secondary"
                // id={`${}`}
                id="button-addon1"
              >
                -
              </Button>
              <FormControl
                aria-label="capacity"
                aria-describedby="capacity"
                onChange={handleInputChange}
                value={Number(capacity)}
                id="button-addon1"
              />
              <Button
                onClick={(e) => handleClick(e, "add")}
                variant="outline-secondary"
                id="button-addon1"
              >
                +
              </Button>
              <Button as="input" type="submit" value="Enviar" />
            </InputGroup>
          </Card.Body>
        </Card>
      }
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
