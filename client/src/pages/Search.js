import React from "react";
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core";
import BookSearch from "../components/BookSearch.js";
import ResultsCard from "../components/ResultsCard.js";
import { useSelector } from "react-redux";
import AboutCard from "../components/AboutCard.js";

// const useStyles = makeStyles((theme) => ({
//   searchBar: {
//     marginTop: theme.spacing(15),
//     paddingTop: theme.spacing(5),
//     paddingBottom: theme.spacing(5),
//   },
// }));

const Search = () => {
  // const classes = useStyles();

  const bookSearch = useSelector((state) => state.BookSearchResults);

  return (
    <>
      <Container>
        <AboutCard />
        <ResultsCard list={bookSearch.books} />
      </Container>
    </>
  );
};

export default Search;
