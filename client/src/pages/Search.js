import React from "react";
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core";
import ResultsCard from "../components/ResultsCard.js";
import { useSelector } from "react-redux";
import AboutCard from "../components/AboutCard.js";
import Nav from "../components/Nav";
import navData from "../utils/navData.json";
import SaveButton from "../components/SaveButton.js";

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
        <Nav
          title={navData.searchPage.title}
          homePage={navData.searchPage.link}
          link={navData.searchPage.link}
        />
        <AboutCard />
        <ResultsCard button={"save"} list={bookSearch.books} />
      </Container>
    </>
  );
};

export default Search;
