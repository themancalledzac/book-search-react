import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import colors from "./color";
import Books from "./Books";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  image: {
    flex: "1 1 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    width: "auto",
    height: "150px",
    margin: "10px",
    position: "relative",
    float: "left",
    alt: "alt image",
  },
  bookCard: {
    marginBottom: "25px",
  },
}));

const ResultsCard = ({ list }) => {
  const classes = useStyles();

  return (
    <Container
      className={classes.searchBar}
      maxWidth='md'
      style={{ backgroundColor: colors.yellow }}
    >
      {list ? (
        list.map((item, index) => {
          return (
            <>
              <Grid
                key={index}
                className={classes.bookCard}
                container
                spacing={3}
              >
                <Grid item xs={12} sm={4}>
                  <Grid item xs={12} sm={12}>
                    <h1 href={item.link}>{item.title}</h1>
                    <h1>{item.authors}</h1>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <img
                      src={item.image}
                      alt='Book Cover'
                      onClick={() => window.open(`${item.link}`, "_blank")}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Grid item xs={12} sm={12}>
                    <p>{item.description}</p>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button
                      onClick={() => window.open(`${item.link}`, "_blank")}
                    >
                      View
                    </Button>
                    <Button link={item.link}>Add to Cart</Button>
                  </Grid>
                  <Grid item xs={12} sm={3}></Grid>
                </Grid>
              </Grid>
              <br></br>
            </>
          );
        })
      ) : (
        <div>search or save yo</div>
      )}
    </Container>
  );
};

export default ResultsCard;
