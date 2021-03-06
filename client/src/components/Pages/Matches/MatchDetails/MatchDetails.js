import {useLocation, useHistory} from "react-router-dom";
import {formatDate} from "../../../../utils/index";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Button,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import Payment from "../../Payment/Payment";
import {useState, useEffect} from "react";

import APIHandler from "../../../../services/api.service";

function MatchesDetails(props) {
  const location = useLocation();
  const {match} = location.state;

  const [capacity, setCapacity] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [matchId, setMatchId] = useState("");
  let [total, setTotal] = useState(price * quantity);

  const matchService = new APIHandler();

  useEffect(() => {
    matchService
      .checkMatch(match.fixture.id)
      .then((res) => {
        setCapacity(res.data[0].capacity);
        setPrice(res.data[0].price);
        setMatchId(res.data[0].matchId);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (e, operation) => {
    if (operation === "add") {
      setTotal(price * (quantity + 1));
      setQuantity(quantity + 1);
    } else {
      quantity === 0 ? setQuantity(0) : setQuantity(Number(quantity) - 1);
    }
  };

  const handleInputChange = (e) => {
    setQuantity(e.currentTarget.value);
  };

  return (
    <div className="contenedor">
      {
        <Card style={{width: "18rem"}}>
          <Card.Body>
            <Card.Title className="title-card">
              <div>
                <img
                  src={match?.teams.home.logo}
                  alt="hola"
                  style={{width: "20px"}}
                />
                {match?.teams.home.name}
              </div>
              vs
              <div>
                <img
                  src={match?.teams.away.logo}
                  alt="hola"
                  style={{width: "20px"}}
                />
                {match?.teams.away.name}
              </div>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              {formatDate(new Date(match?.fixture.date))}
            </ListGroupItem>

            <ListGroupItem>{match?.league.round}</ListGroupItem>
            <ListGroupItem>{match?.fixture.venue.name}</ListGroupItem>
            <ListGroupItem>Precio: {price}</ListGroupItem>
            <ListGroupItem>
              ??ltimas {capacity} entradas disponibles
            </ListGroupItem>
          </ListGroup>
          <div className="contador">
            <InputGroup className="mb-3">
              <Button
                onClick={(e) => handleClick(e, "remove")}
                variant="outline-secondary"
                id="button-addon1"
              >
                -
              </Button>
              <FormControl
                aria-label="capacity"
                aria-describedby="capacity"
                onChange={handleInputChange}
                value={Number(quantity)}
                id="button-addon1"
              />
              <Button
                onClick={(e) => handleClick(e, "add")}
                variant="outline-secondary"
                id="button-addon1"
              >
                +
              </Button>
            </InputGroup>
          </div>
          <h3 className="price"> Total: ???{total} </h3>
          <Form.Control
            type="text"
            placeholder="Nombre del Titular de la tarjeta"
          />
          <Payment price={total} matchId={matchId} number={quantity} />
        </Card>
      }
    </div>
  );
}

export default MatchesDetails;
