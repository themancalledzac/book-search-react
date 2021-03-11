import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import colors from "../color";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    backgroundColor: colors.orange,
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-top",
    paddingTop: "10px",
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography
            style={{ paddingLeft: "10px" }}
            className={classes.title}
            variant='h5'
            noWrap
          >
            Goodle Books Search
          </Typography>

          <IconButton aria-label='display more actions' color='inherit'>
            <Button
              variant='contained'
              color='default'
              href='#contained-buttons'
            >
              Saved
            </Button>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
