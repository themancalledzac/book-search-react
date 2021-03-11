import {
  Container,
  Input,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import colors from "../../components/color";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(15),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

const BookSearch = () => {
  const classes = useStyles();
  return (
    <Container
      className={classes.searchBar}
      maxWidth='md'
      style={{ backgroundColor: colors.primary }}
    >
      <Typography component='div'>
        <h3 style={{ paddingLeft: "10px" }}>Book Search</h3>
        <TextField
          id='outlined-search'
          label='Search field'
          type='search'
          variant='outlined'
        />
      </Typography>
    </Container>
  );
};

export default BookSearch;
