import APIHandler from "../../../services/api.service";
import {useState, useEffect} from "react";
import MatchCard from "../TeamProfile/MatchCard/MatchCard";

const teamHandler = new APIHandler();

function TeamProfile(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    teamHandler
      .getTeamMatches(props.loggedUser.team_id)
      .then((res) => {
        // console.log("Hola", res.data);
        setMatches(res.data.response);
      })
      .catch((err) => console.log(err));
  }, [props.loggedUser.team_id]);

  return (
    <>
      <h2> Proximos Partidos </h2>
      {matches.map((match) => (
        <>{<MatchCard match={match}></MatchCard>}</>
      ))}
    </>
  );
}

export default TeamProfile;
