import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Grid, TextField } from "@material-ui/core";
import API from "../utils/API";
import colors from "./color";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 20,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: colors.blue,
    borderRadius: "0 0 7px 7px",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-top",
    paddingTop: "0px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  cartLarge: {
    marginRight: "3rem",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  cartSmall: {
    marginRight: "3rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

export default function ProminentAppBar() {
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

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.toolbar} position='fixed'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Typography
                  style={{ textAlign: "center" }}
                  className={classes.title}
                  variant='h5'
                  noWrap
                  onClick={refreshPage}
                >
                  Books Search
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton
                  className={classes.cartSmall_}
                  aria-label='display more actions'
                  color='inherit'
                >
                  <Button
                    variant='contained'
                    color='default'
                    href='#contained-buttons'
                  >
                    Shopping Cart
                  </Button>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
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
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  variant='contained'
                  // onSubmit={handleSubmit}
                  type='submit'
                  onClick={handleSubmit}
                  style={{
                    float: "right",
                    margin: "5px 0",
                  }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <IconButton
              className={classes.cartLarge}
              aria-label='display more actions'
              color='inherit'
            >
              <Button
                variant='contained'
                color='default'
                href='#contained-buttons'
              >
                Shopping Cart
              </Button>
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
