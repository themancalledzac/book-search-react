import React from "react";
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core";
import ResultsCard from "../components/ResultsCard.js";
import { useSelector } from "react-redux";
import AboutCard from "../components/AboutCard.js";
import Nav from "../components/Nav";
import navData from "../utils/navData.json";
import headerData from "../utils/headerAboutData";

const Search = () => {
  // const classes = useStyles();
  const bookSearch = useSelector((state) => state.BookSearchResults);
  const BookSearchInput = useSelector(
    (searchInput) => searchInput.BookSearchInput
  );

  return (
    <>
      <Container>
        <Nav
          title={navData.searchPage.title}
          homePage={navData.searchPage.link}
          link={navData.searchPage.link}
        />
        <AboutCard
          title={headerData[0].title}
          paragraph={headerData[0].paragraph}
        />
        <ResultsCard
          button={"save"}
          list={bookSearch.books}
          title={BookSearchInput}
        />
      </Container>
    </>
  );
};

export default Search;
