import React from "react";
import axios from "axios";
import "./Payment.css";
import {loadStripe} from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {useHistory} from "react-router-dom";
import APIHandler from "../../../services/api.service";
// import MatchDetails from "../../Pages/Matches/MatchDetails/MatchDetails";

const stripePromise = loadStripe(
  "pk_test_51K6CRIH1ByOTHJYIK1GUeHbZBB9fDj0e6pgIqEMJzBCCAhBNTi5sAFS5Sp8o4wczaUvt0HkIVgt5lL7kE1HMiBXI00OYrBqhn6"
);

const CheckoutForm = (props) => {
  console.log(props, "soy props");

  const stripe = useStripe();
  const elements = useElements();
  const ticketService = new APIHandler();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const {id} = paymentMethod;
      const {data} = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/matches/checkout`,
        {
          id,
          amount: props.total * 100,
        }
      );
      ticketService
        .createTicket(props.price, props.matchId, props.number)
        .then((res) => {
          console.log(res.data);
          return ticketService.sendEmail(res.data._id);
        })
        .then((res) => {
          history.push(`/finish/${res.data._id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const history = useHistory();

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Comprar</button>
    </form>
  );
};

function Payment(props) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  );
}

export default Payment;
