import {useState, useEffect} from "react";
import {formatDate} from "../../../../utils";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import APIHandler from "../../../../services/api.service";

function TeamProfile(props) {
  const teamProfileService = new APIHandler();

  const [capacity, setCapacity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (props.match.dbInfo) {
      if (props.match.dbInfo?.length !== 0) {
        setCapacity(props.match.dbInfo[0].capacity);
        setPrice(props.match.dbInfo[0].price);
      }
    }
  }, [props.match]);

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

  const handlePriceChange = (e) => {
    setPrice(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    teamProfileService
      .checkMatch(props.match.fixture.id)
      .then((response) => {
        if (response.data.length === 0) {
          teamProfileService
            .createMatch({capacity, price, matchId: props.match.fixture.id})
            .then((match) => console.log(match.data))
            .catch((err) => console.log(err));
        } else {
          teamProfileService
            .updateMatch({
              id: response.data[0]._id,
              price,
              capacity,
            })
            .then((res) => {
              setCapacity(res.data.capacity);
              setPrice(res.data.price);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
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
            <ListGroupItem>
              {formatDate(new Date(props.match?.fixture.date))}
            </ListGroupItem>
            <ListGroupItem>{props.match?.league.round}</ListGroupItem>
            <ListGroupItem>{props.match?.fixture.venue.name}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
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
                </InputGroup>
              </div>

              <InputGroup className="mb-3" id="ticketprice">
                <InputGroup.Text>€</InputGroup.Text>
                <FormControl
                  aria-label="price"
                  value={Number(price)}
                  onChange={handlePriceChange}
                />
              </InputGroup>
              <Button as="input" id="pay" type="submit" value="Enviar" />
            </Form>
          </Card.Body>
        </Card>
      }
    </>
  );
}
export default TeamProfile;
