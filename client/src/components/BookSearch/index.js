import { Container, makeStyles, Typography } from "@material-ui/core";
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
        <p>Search Card</p>
      </Typography>
    </Container>
  );
};

export default BookSearch;
