import {useLocation, useHistory} from "react-router-dom";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Button,
  FormControl,
  InputGroup,
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
  let [total, setTotal] = useState(0);

  let calculateTotal = (price, quantity) => {
    setTotal(price * quantity);
  };

  const history = useHistory();

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
      setQuantity(Number(quantity) + 1);
    } else {
      quantity === 0 ? setQuantity(0) : setQuantity(Number(quantity) - 1);
    }
    calculateTotal(price, quantity);
  };

  const handleInputChange = (e) => {
    setQuantity(e.currentTarget.value);
  };

  return (
    <>
      <h1>
        {match?.teams.home.name} vs {match?.teams.away.name}
      </h1>
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
            <ListGroupItem>Precio: {price}</ListGroupItem>
            <ListGroupItem>
              Últimas {capacity} entradas disponibles
            </ListGroupItem>
          </ListGroup>
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
            Total: {total}
          </InputGroup>
          <Payment price={total} matchId={matchId} number={quantity} />
        </Card>
      }
    </>
  );
}

export default MatchesDetails;
