import React from "react";
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core";
import BookSearch from "../components/BookSearch.js";
import ResultsCard from "../components/ResultsCard.js";

// const useStyles = makeStyles((theme) => ({
//   searchBar: {
//     marginTop: theme.spacing(15),
//     paddingTop: theme.spacing(5),
//     paddingBottom: theme.spacing(5),
//   },
// }));

const Search = () => {
  // const classes = useStyles();
  return (
    <>
      <Container>
        <BookSearch />
        <ResultsCard />
      </Container>
    </>
  );
};

export default Search;
