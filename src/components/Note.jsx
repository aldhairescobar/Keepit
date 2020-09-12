import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1 className="note-title">{props.title}</h1>
      <p className="note-content">{props.content}</p>
      <button
        className="btn-delete"
        onClick={() => {
          props.delete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
