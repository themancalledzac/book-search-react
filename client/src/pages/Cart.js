import { Container } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import AboutCard from "../components/AboutCard";
import Nav from "../components/Nav";
import navData from "../utils/navData.json";
import API from "../utils/API";
import ResultsCard from "../components/ResultsCard";
import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "../components/DeleteButton";

const Cart = () => {
  const [data, setData] = React.useState();
  const dispatch = useDispatch();
  const bookSearch = useSelector((state) => state.SavedBookList);

  useEffect(() => {
    async function savedBooks() {
      const { data } = await API.getSavedBooks();
      console.log(data);
      dispatch({
        type: "LOADING",
      });
      dispatch({
        type: "BOOK_ADD",
        books: data,
      });
      dispatch({
        type: "LOADING",
      });
    }
    savedBooks();
  }, []);

  return (
    <>
      <Container>
        <Nav
          title={navData.cart.title}
          homePage={navData.cart.link}
          link={navData.cart.link}
        />
        <AboutCard />
        <ResultsCard button={"delete"} list={bookSearch.books} />
      </Container>
    </>
  );
};

export default Cart;
