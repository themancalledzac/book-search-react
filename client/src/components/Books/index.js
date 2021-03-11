import { Button } from "@material-ui/core";
import React from "react";

const Books = () => {
  return (
    <div
      className='BookCard'
      style={{ border: "1px solid #ddd", padding: "20px" }}
    >
      <div className='top' style={{ display: "flex" }}>
        <div className='BookTitle' style={{ flex: "1 1 0" }}>
          <h5>Book Title</h5>
          <h6>Book Author</h6>
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
        <image
          style={{
            flex: "1 1 0",
            border: "1px solid #ddd",
            borderRadius: "4px",
            width: "auto",
            height: "150px",
            margin: "10px",
            position: "relative",
            float: "left",
          }}
        ></image>
        <p style={{ flex: "4 1 0", margin: "10px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aliquid?
          Eaque possimus unde ea rerum iste dolores molestiae ipsam qui omnis.
          Odit non fugit ut harum! Animi, assumenda, non placeat officia tempore
          alias laudantium harum, doloremque facere id optio totam perferendis
          qui facilis quae quo consequuntur iure praesentium? Corrupti,
          quibusdam!
        </p>
      </div>
    </div>
  );
};

export default Books;
