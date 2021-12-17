import APIHandler from "../../../services/api.service";
import {useParams} from "react-router";
import {useState, useEffect} from "react";
import BuyerMatchCard from "./BuyerMatchCard";
import "./BuyerMatchCard.css";
import {Spinner} from "react-bootstrap";

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
        setMatchList(res.data);
      })
      .catch((err) => console.log(err));
  }, [country]);
  return matchList.length === 0 ? (
    <Spinner animation="border" role="status" id="pluswrap">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <>
      <h2>
        <img src={matchList[0]?.league.logo} alt="League" />
      </h2>
      <div className="container">
        {matchList.map((match) => {
          return <BuyerMatchCard match={match} />;
        })}
      </div>
    </>
  );
}

export default Matches;
