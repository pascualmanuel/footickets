import APIHandler from "../../../services/api.service";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {Card, ListGroup} from "react-bootstrap";
import {AiOutlineShoppingCart} from "react-icons/ai";
// import Example from "../../Offcanvas/Example";
const footballAPI = new APIHandler();

function Matches() {
  //   console.log(footballAPI);
  const [matchList, setMatchList] = useState([]);

  const {country} = useParams();

  useEffect(() => {
    footballAPI
      .getAllMatches(country)
      .then((res) => {
        console.log("Matches", res.data);
        setMatchList(res.data);
      })
      .catch((err) => console.log(err));
  }, [country]);
  return (
    <>
      <h1>Lista de partidos</h1>
      {matchList.map((match) => (
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
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush"></ListGroup>
          <Card.Body>
            <Card.Link href="#">
              Comprar entrada
              <AiOutlineShoppingCart />
            </Card.Link>
            <Card.Link>
              <Link
                to={{
                  pathname: "/match/details",
                  state: {
                    match: match,
                  },
                }}
              >
                Ver detalles
              </Link>
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
      {/* <Example /> */}
    </>
  );
}

export default Matches;
