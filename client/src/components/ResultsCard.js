import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import colors from "./color";
import Books from "./Books";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

const ResultsCard = () => {
  const classes = useStyles();
  return (
    <Container
      className={classes.searchBar}
      maxWidth='md'
      style={{ backgroundColor: colors.yellow }}
    >
      <Typography component='div'>
        <h5>Saved Books</h5>
        <Books />
      </Typography>
    </Container>
  );
};

export default ResultsCard;
