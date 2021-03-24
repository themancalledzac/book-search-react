import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import colors from "./color";
import API from "../utils/API";
import { useDispatch, useSelector } from "react-redux";
import { BOOK_SEARCH, LOADING } from "../utils/actions";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(15),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

// ---------------------------------state/functions----------------------------//

const BookSearch = () => {
  const classes = useStyles();
  const searchRef = useRef();

  const BookSearchResults = useSelector((state) => state.BookSearchResults);
  const BookSearchInput = useSelector((state) => state.BookSearchInput);
  const dispatch = useDispatch();

  // starting data for the website, 'sample books', if you will
  useEffect(() => {
    async function initialBooks() {
      const { data } = await API.searchBooks("The New York Times Bestsellers");
      console.log(data.items);
      dispatch({
        type: "LOADING",
      });
      dispatch({
        type: "BOOK_SEARCH",
        books: await data.items.map((item) => bookData(item)),
      });
    }
    initialBooks();
  }, []);

  const bookData = (item) => {
    return {
      authors: item.volumeInfo.authors,
      image: item.volumeInfo.imageLinks
        ? item.volumeInfo.imageLinks.thumbnail
        : "./images/book.png",
      title: item.volumeInfo.title,
      subtitle: item.volumeInfo.subtitle,
      description: item.volumeInfo.description,
      link: item.saleInfo.buyLink,
      index: item.id,
    };
  };

  const handleInputChange = async (e) => {
    e.preventDefault();
    dispatch({
      type: "BOOK_SEARCH_INPUT",
      input: searchRef.current.value,
    });
    console.log(BookSearchInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api call
    const { data } = await API.searchBooks(searchRef.current.value);
    dispatch({
      type: "LOADING",
    });
    dispatch({
      type: "BOOK_SEARCH",
      books: await data.items.map((item) => bookData(item)),
    });
    console.log(data);
  };

  // ----------------------------------component -----------------------------//

  return (
    <Container
      className={classes.searchBar}
      maxWidth='md'
      style={{ backgroundColor: colors.primary }}
    >
      <form
        component='div'
        style={{ marginBottom: "30px" }}
        onSubmit={handleSubmit}
      >
        <h3 style={{ paddingLeft: "10px" }}>Book Search</h3>
        <TextField
          id='bookSearchId'
          name='bookSearch'
          inputRef={searchRef}
          label='Book Search'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
          variant='filled'
          onChange={handleInputChange}
        />

        <Button
          variant='contained'
          // onSubmit={handleSubmit}
          type='submit'
          onClick={handleSubmit}
          style={{
            float: "right",
            margin: "15px 0",
          }}
        >
          Search
        </Button>
      </form>
    </Container>
  );
};

export default BookSearch;
