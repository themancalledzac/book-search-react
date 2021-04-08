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
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
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
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const BookSearchResults = useSelector((state) => state.BookSearchResults);
  const BookSearchInput = useSelector((state) => state.BookSearchInput);
  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

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

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <MailIcon />
        </IconButton>
        <p>Contact Me</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
          onClick={() => window.open(`${"https://zacedens.com"}`, "_blank")}
        >
          <AccountCircle />
        </IconButton>
        <p>Portfolio</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            className={classes.title}
            variant='h6'
            noWrap
            onClick={refreshPage}
          >
            Google Book Search
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search...'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              id='bookSearchId'
              name='bookSearch'
              inputRef={searchRef}
              label='bookSearch'
              type='text'
              onChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label='module to contact / email me'
              color='inherit'
            >
              <MailIcon />
            </IconButton>
            <IconButton
              aria-label='link to portfolio'
              color='inherit'
              onClick={() => window.open(`${"https://zacedens.com"}`, "_blank")}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

// <Grid container spacing={3}>
//   <Grid item xs={12} sm={3}>
//     <Grid container spacing={3}>
//       <Grid item xs={8}>
//         <Typography
//           style={{ textAlign: "center" }}
//           className={classes.title}
//           variant='h5'
//           noWrap
//           onClick={refreshPage}
//         >
//           Books Search
//         </Typography>
//       </Grid>
//       <Grid item xs={4}>
//         <IconButton
//           className={classes.cartSmall_}
//           aria-label='display more actions'
//           color='inherit'
//         >
//           <Button
//             variant='contained'
//             color='default'
//             href='#contained-buttons'
//           >
//             Shopping Cart
//           </Button>
//         </IconButton>
//       </Grid>
//     </Grid>
//   </Grid>
//   <Grid item xs={12} sm={6}>
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={9}>
//         <TextField
//           id='bookSearchId'
//           name='bookSearch'
//           inputRef={searchRef}
//           label='Book Search'
//           style={{ margin: 8 }}
//           fullWidth
//           margin='normal'
//           type='text'
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant='filled'
//           onChange={handleInputChange}
//         />
//       </Grid>
//       <Grid item xs={12} sm={3}>
//         <Button
//           variant='contained'
//           // onSubmit={handleSubmit}
//           type='submit'
//           onClick={handleSubmit}
//           style={{
//             float: "right",
//             margin: "5px 0",
//           }}
//         >
//           Search
//         </Button>
//       </Grid>
//     </Grid>
//   </Grid>
//   <Grid item xs={12} sm={3}>
//     <IconButton
//       className={classes.cartLarge}
//       aria-label='display more actions'
//       color='inherit'
//     >
//       <Button
//         variant='contained'
//         color='default'
//         href='#contained-buttons'
//       >
//         Shopping Cart
//       </Button>
//     </IconButton>
//   </Grid>
// </Grid>
