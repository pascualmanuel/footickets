import {Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import APIHandler from "../../../services/api.service";

function BuyerMatchCard(props) {
  const match = props.match;
  const [capacity, setCapacity] = useState(0);
  const [price, setPrice] = useState(0);

  const matchService = new APIHandler();

  useEffect(() => {
    matchService
      .checkMatch(match.fixture.id)
      .then((res) => {
        setCapacity(res.data[0].capacity);
        setPrice(res.data[0].price);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card style={{width: "18rem"}}>
      <Card.Body>
        <Card.Title>
          <img
            src={match?.teams.home.logo}
            alt="hola"
            style={{width: "20px"}}
          />
          {match?.teams.home.name}
          <br />
          <img
            src={match?.teams.away.logo}
            alt="hola"
            style={{width: "20px"}}
          />
          {match?.teams.away.name}
        </Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush"></ListGroup>
      {capacity !== 0 ? (
        <Card.Text>
          {capacity} entradas disponibles <br></br> €{price}
        </Card.Text>
      ) : (
        <p> No hay entradas disponibles </p>
      )}
      <Card.Body>
        <Card.Link href="#"></Card.Link>
        <Card.Link>
          <Link
            to={{
              pathname: "/match/details",
              state: {
                match: match,
              },
            }}
          >
            Ver Detalles
          </Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BuyerMatchCard;
