import {useState, useEffect} from "react";
import {useParams} from "react-router";
import APIHandler from "../../../services/api.service";
import BuyerMatchCard from "./BuyerMatchCard";
import {Spinner} from "react-bootstrap";

const teamHandler = new APIHandler();

function TeamMatches() {
  const {teamName} = useParams();

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    teamHandler
      .getTeamId(teamName)
      .then((res) => {
        return teamHandler.getTeamMatches(res.data);
      })
      .then((res) => {
        setMatches(res.data.response);
      })
      .catch((err) => console.log(err));
  }, [teamName]);

  return matches.length === 0 ? (
    <Spinner animation="border" role="status" id="pluswrap">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <>
      <h2> Proximos Partidos </h2>
      <div className="container">
        {matches.map((match) => {
          return <BuyerMatchCard match={match} />;
        })}
      </div>
    </>
  );
}

export default TeamMatches;
