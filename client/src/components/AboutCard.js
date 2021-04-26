import React, { useEffect, useRef, useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import colors from "./color";

const useStyles = makeStyles((theme) => ({
  aboutCard: {
    backgroundColor: colors.blueLight,
    borderRadius: "7px",
    padding: "20px",
    marginTop: "20px",
  },
  title: {
    display: "none",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  ogTitle: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function refreshPage() {
  window.location.reload(false);
}

const AboutCard = ({ title, paragraph }) => {
  const classes = useStyles();
  const searchRef = useRef();
  return (
    <Container maxWidth='md' className={classes.aboutCard}>
      <Typography
        className={classes.title}
        variant='h6'
        noWrap
        onClick={refreshPage}
      >
        Google Book Search
      </Typography>
      <Typography>
        <h4 className={classes.ogTitle}>{title}</h4>
      </Typography>
      <p>{paragraph}</p>
    </Container>
  );
};

export default AboutCard;
