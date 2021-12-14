import {useState, useEffect} from "react";
import {useParams} from "react-router";
import APIHandler from "../../../services/api.service";
import BuyerMatchCard from "./BuyerMatchCard";

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

  return (
    <>
      <h2> Proximos Partidos </h2>
      {matches.map((match) => (
        <BuyerMatchCard match={match} />
      ))}
    </>
  );
}

export default TeamMatches;
