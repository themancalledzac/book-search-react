import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../utils/API";
import refreshPage from "./reloadPage";

const useStyles = makeStyles((theme) => ({
  button: {},
}));

// function refreshPage() {
//   window.location.reload(false);
// }

const SaveButton = ({ _id, button }) => {
  const classes = useStyles();
  const BookSearchResults = useSelector((state) => state.BookSearchResults);
  const dispatch = useDispatch();

  const handleAddSubmit = async (event) => {
    event.preventDefault();
    try {
      // currentTarget vs target for the material-ui element to work
      const dataId = event.currentTarget.getAttribute("data-id");
      const bookToSave = BookSearchResults.books[dataId];
      // console.log(event.target);
      // console.log(dataId);
      // console.log(BookSearchResults.books);
      console.log(bookToSave);

      await API.saveBook(bookToSave);
      return;
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const dataId = event.currentTarget.getAttribute("data-id");
      // console.log(BookSearchResults.books);
      console.log(dataId);
      await API.deleteBook(dataId);
      refreshPage();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {button === "save" ? (
        <Button
          className={classes.button}
          data-id={_id}
          onClick={handleAddSubmit}
        >
          Add to Cart
        </Button>
      ) : (
        <Button className={classes.button} data-id={_id} onClick={handleDelete}>
          Remove from Cart
        </Button>
      )}
    </>
  );
};

export default SaveButton;
