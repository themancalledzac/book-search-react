import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/List";
import MoreIcon from "@material-ui/icons/MoreVert";
import API from "../utils/API";
import colors from "./color";
import { Link } from "react-router-dom";
import bookData from "./bookData";

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
  linkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function ProminentAppBar(props) {
  const classes = useStyles();
  const searchRef = useRef();
  const currentPage = useSelector((page) => page.CurrentPage);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePageChange = () => {
    dispatch({
      type: "PAGE_CHANGE",
    });
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
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

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
      dispatch({
        type: "BOOK_SEARCH_INPUT",
        input: "The New York Times Bestsellers",
      });
      dispatch({
        type: "LOADING",
      });
    }
    initialBooks();
  }, []);

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
      // put the login here
    }
  };

  const handleSubmit = async () => {
    // api call
    const { data } = await API.searchBooks(searchRef.current.value);
    dispatch({
      type: "LOADING",
    });
    dispatch({
      type: "BOOK_SEARCH",
      books: await data.items.map((item) => bookData(item)),
    });
    dispatch({
      type: "BOOK_SEARCH_INPUT",
      input: searchRef.current.value,
    });
    dispatch({
      type: "LOADING",
    });
    document.getElementById("bookSearchId").value = "";
    console.log(data);
  };

  function refreshPage() {
    window.location.reload(false);
  }
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      style={{ paddingRight: "20px" }}
    >
      <Link
        to={props.link}
        className={classes.linkStyle}
        onClick={() => {
          handleMobileMenuClose();
        }}
      >
        <MenuItem>
          <IconButton color='inherit' className={classes.menuItem}>
            <ListIcon />
          </IconButton>
          <p>{props.title}</p>
        </MenuItem>
      </Link>

      <MenuItem onClick={handleProfileMenuOpen} className={classes.menuItem}>
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
      <AppBar style={{ backgroundColor: colors.blue }} position='static'>
        <Toolbar>
          <Link to='/' className={classes.linkStyle}>
            <Typography
              className={classes.title}
              variant='h6'
              noWrap
              onClick={refreshPage}
            >
              Google Book Search
            </Typography>
          </Link>
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
              // onChange={handleInputChange}
              onKeyDown={keyPress}
              onSubmit={handleSubmit}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to={props.link} className={classes.linkStyle}>
              <IconButton
                aria-label='module to contact / email me'
                color='inherit'
              >
                {props.title}
              </IconButton>
            </Link>
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
