import React from "react";
import Payment from "../Payment/Payment";
import "./Home.css";
import Masonary from "./Masonary/Masonary";
import SearchBar from "./SearchBar/SearchBar";

function Home() {
  return (
    <>
      <SearchBar />
      <br></br>
      <h2>Busca tu entrada según tu Liga favortia!!!</h2>
      <br></br>
      <Masonary />
      <br></br>
      <br></br>
      <div className="payment">
        <Payment />
      </div>
    </>
  );
}

export default Home;
