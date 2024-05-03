import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./component/NoteList";
import Search from "./component/Search";
import Header from "./component/Header";
import GoogleSearchButton from "./component/GoogleSearchButton";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    return (
      savedNotes || [
        // {
        //   id: nanoid(),
        //   text: " heyy This is my first note!",
        //   date: "1/04/2024",
        // },
        // {
        //   id: nanoid(),
        //   text: " heyy This is my second note!",
        //   date: "2/04/2024",
        // },
        // {
        //   id: nanoid(),
        //   text: " hey  This is my third note!",
        //   date: "3/04/2024",
        // },
        {
          id: nanoid(),
          text: " hey  This is my new note!",
          date: "4/04/2024",
        },
      ]
    );
  });

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <div style={{ position: "relative" }}>
          <GoogleSearchButton
            keyword={searchText}
            style={{
              position: "absolute",
              top: "-50px",
              right: "20px",
              right: "20px",
            }}
          />
        </div>
        <br />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
