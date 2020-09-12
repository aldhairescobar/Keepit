import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(index) {
    setNotes((prevValue) => {
      return prevValue.filter((note, i) => {
        return i !== index;
      });
    });
  }

  return (
    <div className="container">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={note.title}
            content={note.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
