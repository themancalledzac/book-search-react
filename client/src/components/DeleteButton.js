import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  button: {},
}));

const DeleteButton = ({ _id }) => {
  const classes = useStyles();
  const BookSearchResults = useSelector((state) => state.BookSearchResults);
  const dispatch = useDispatch();

  const handleAddSubmit = async (event) => {
    event.preventDefault();
    try {
      // currentTarget vs target for the material-ui element to work
      const dataId = event.currentTarget.getAttribute("data-id");
      const id = dataId;
      // console.log(event.target);
      // console.log(dataId);
      // console.log(BookSearchResults.books);
      console.log(id);
      await API.delete(id);

      return;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button
        className={classes.button}
        data-id={_id}
        onClick={handleAddSubmit}
      >
        Remove from Cart
      </Button>
    </>
  );
};

export default DeleteButton;
