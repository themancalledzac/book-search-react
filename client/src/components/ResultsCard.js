import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import colors from "./color";
import { useSelector, useDispatch } from "react-redux";
import API from "../utils/API";
import SaveButton from "./SaveButton";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    borderRadius: "7px",
  },
  savePage: {
    backgroundColor: colors.whiteBlue,
  },
  cartPage: {
    backgroundColor: colors.whiteBlue,
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
    "&:hover": {
      cursor: "pointer",
    },
  },
  bookCard: {
    marginBottom: "5px",
    borderRadius: "7px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  underLine: {
    borderTop: "1px #000000",
  },
  firstUnderline: {
    borderTop: "1px #000000",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "85%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "90%",
    },
  },
  title: {
    textAlign: "center",
    marginBottom: "40px",
  },
  bookDivide: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  paper: {
    marginBottom: "25px",
  },
}));

const ResultsCard = ({ list, button, title }) => {
  const classes = useStyles();
  const BookSearchInput = useSelector(
    (searchInput) => searchInput.BookSearchInput
  );
  const dispatch = useDispatch();

  return (
    <Container
      className={`${classes.component}
        ${button === "save" ? classes.savePage : classes.cartPage}`}
      maxWidth='md'
    >
      <Typography className={classes.title} variant='h6' noWrap>
        {title}
      </Typography>
      <hr className={classes.firstUnderline}></hr>
      {list ? (
        list.map((item, index) => {
          return (
            <Paper className={classes.paper} elevation={3} key={index}>
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
                    <hr className={classes.underLine}></hr>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={4}>
                      <Button
                        onClick={() => window.open(`${item.link}`, "_blank")}
                      >
                        View
                      </Button>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <SaveButton
                        {...item}
                        _id={item._id ? item._id : index}
                        button={button}
                      />
                    </Grid>
                  </Grid>
                  <hr className={classes.underLine}></hr>
                </Grid>
              </Grid>
              <br></br>
            </Paper>
          );
        })
      ) : (
        <div>Loading activity</div>
      )}
    </Container>
  );
};

export default ResultsCard;
