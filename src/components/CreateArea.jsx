import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(e) {
    const { value, name } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setIsExpanded(true);
  }

  return (
    <form
      className="create-note-form"
      onSubmit={(e) => {
        props.onAdd(note);
        setNote({ title: "", content: "" });
        e.preventDefault();
      }}
    >
      {isExpanded && (
        <input
          className="input-title"
          onChange={handleChange}
          name="title"
          placeholder="Title"
          type="text"
          value={note.title}
          required
        />
      )}
      <textarea
        className="input-content"
        onChange={handleChange}
        onClick={handleClick}
        name="content"
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
        value={note.content}
      />
      <Zoom in={isExpanded}>
        <Fab type="submit">
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateArea;
