import { Button, Container, makeStyles, Typography } from "@material-ui/core";
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
}));

const ResultsCard = ({ list }) => {
  const classes = useStyles();
  return (
    <Container
      className={classes.searchBar}
      maxWidth='md'
      style={{ backgroundColor: colors.yellow }}
    >
      {list.length ? (
        list.map((item, index) => {
          return (
            <div
              className='BookCard'
              style={{ border: "1px solid #ddd", padding: "20px" }}
              key={index}
            >
              <div className='top' style={{ display: "flex" }}>
                <div className='BookTitle' style={{ flex: "1 1 0" }}>
                  <h5>{item.title}</h5>
                  <h6>{item.authors}</h6>
                </div>
                <div className='viewDelete' style={{ flex: "1 1 0" }}>
                  <Button varient='contained' color='default' href='#'>
                    View
                  </Button>
                  <Button varient='contained' color='default' href='#'>
                    Delete
                  </Button>
                </div>
              </div>
              <div className='bottom' style={{ display: "flex" }}>
                <img className={classes.image} alt='Book Image'>
                  {}
                </img>
                <p style={{ flex: "4 1 0", margin: "10px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  aliquid? Eaque possimus unde ea rerum iste dolores molestiae
                  ipsam qui omnis. Odit non fugit ut harum! Animi, assumenda,
                  non placeat officia tempore alias laudantium harum, doloremque
                  facere id optio totam perferendis qui facilis quae quo
                  consequuntur iure praesentium? Corrupti, quibusdam!
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div>search or save yo</div>
      )}
    </Container>
  );
};

export default ResultsCard;
