import APIHandler from "../../../services/api.service";
import {Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import BuyerMatchCard from "./BuyerMatchCard";

function TeamTickets() {
    
    const [allMatches, setAllMatches] = useState([]);
    const [dbInfo, setdbInfo] = useState([]);
  
    const matchService = new APIHandler();
  
    useEffect(() => {
      matchService
        .getAllTicketsMatches()
        .then((res) => {
            console.log(res.data)
            setAllMatches(res.data.allMatches);
            setdbInfo(res.data.dbInfo);
        })
        .catch((err) => console.log(err));
    }, []);

  return (
      allMatches.length === 0 ? 
      <p>Loading...</p>

      :
      
      allMatches.map(match => {
          return <BuyerMatchCard key={match.fixture.id} match={match}/>
      })
  )
}

export default TeamTickets;
