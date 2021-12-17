import {Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import APIHandler from "../../../services/api.service";
import "./BuyerMatchCard.css";

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
    <>
      {
        <Card style={{width: "18rem"}}>
          <Card.Body>
            <Card.Title>
              <h3 className="vs">
                {" "}
                <img
                  src={match?.teams.home.logo}
                  alt="hola"
                  style={{width: "20px"}}
                />
                {match?.teams.home.name}
              </h3>
              <h3 className="vs">
                {" "}
                <img
                  src={match?.teams.away.logo}
                  alt="hola"
                  style={{width: "20px"}}
                />
                {match?.teams.away.name}
              </h3>
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush"></ListGroup>
          <Card.Body>
            {capacity !== 0 ? (
              <Card.Text>
                <h3 className="precio">€{price}</h3>
                <br></br>
                <Card.Link>
                  <Link
                    className="button-details"
                    to={{
                      pathname: "/match/details",
                      state: {
                        match: match,
                      },
                    }}
                  >
                    Entradas
                  </Link>
                </Card.Link>
              </Card.Text>
            ) : (
              <>
                <p>Se el primero en enterarte</p>
                <p className="button-avisame"> Avisame </p>
              </>
            )}
          </Card.Body>
        </Card>
      }
    </>
  );
}

export default BuyerMatchCard;
