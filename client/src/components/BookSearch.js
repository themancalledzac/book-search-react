import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import React, { useRef, useState } from "react";
import colors from "./color";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(15),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

// ---------------------------------state/functions----------------------------//

const BookSearch = () => {
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const refContainer = useRef();

  function handleInputChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
    console.log(search);
  }

  const handleSubmit = (e) => {
    // why is this preventDefault not preventing default?
    e.preventDefault();

    // console.log(refContainer.current);
    // console.log(search);
    API.getBooks().then(({ data }) => {
      console.log(data);
    });
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
          useRef={refContainer}
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
