import APIHandler from "../../../services/api.service";
import {useParams} from "react-router";
import {useState, useEffect} from "react";
import BuyerMatchCard from "./BuyerMatchCard";

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
  return (
    <>
      <h1>Lista de partidos de La Liga:</h1>
      {matchList.map((match) => (
        <BuyerMatchCard match={match} />
      ))}
    </>
  );
}

export default Matches;
