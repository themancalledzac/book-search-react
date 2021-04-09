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
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function refreshPage() {
  window.location.reload(false);
}

const AboutCard = () => {
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste
        incidunt earum tempora quia neque veniam, dolores dolore repellendus
        ratione!
      </p>
    </Container>
  );
};

export default AboutCard;
