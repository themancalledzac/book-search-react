import { Container } from "@material-ui/core";
import React from "react";
import AboutCard from "../components/AboutCard";
import Nav from "../components/Nav";
import navData from "../utils/navData.json";

const Cart = () => {
  return (
    <>
      <Container>
        <Nav title={navData.cart.title} link={navData.cart.link} />
        <AboutCard />
        <h1>Saved Page</h1>
      </Container>
    </>
  );
};

export default Cart;
