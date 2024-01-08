import React, { useState, useEffect } from "react";
import Styles from "./Dashboard.module.css";
import { createNotes, updateNotes, getNotesData } from "../../api/apiNotes";

const DashboardNotes = () => {
  const [noteContent, setNoteContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    loadNoteContent();
  }, []);

  useEffect(() => {
    if (editMode) {
      const saveNote = async () => {
        if (noteContent.trim() !== "") {
          const notesData = await getNotesData();

          if (notesData.length > 0) {
            await updateNotes(notesData[0].id, noteContent);
          } else {
            await createNotes(noteContent);
          }
        }
      };
      const saveTimeout = setTimeout(saveNote, 1000);
      return () => clearTimeout(saveTimeout);
    }
  }, [noteContent, editMode]);

  const loadNoteContent = async () => {
    const notesData = await getNotesData();

    if (notesData.length > 0) {
      setNoteContent(notesData[0].content);
    }
  };

  const handleTextareaChange = (event) => {
    setNoteContent(event.target.value);
  };

  const handleTextareaClick = () => {
    setEditMode(true);
  };

  const handleSaveNote = async () => {
    if (noteContent.trim() !== "") {
      const notesData = await getNotesData();

      if (notesData.length > 0) {
        await updateNotes(notesData[0].id, noteContent);
      } else {
        await createNotes(noteContent);
      }
    }
    setEditMode(false);
  };

  return (
    <div
      className={Styles["DashboardNotes_note"]}
      style={{ background: "rgba(255, 255, 255, 0)" }}
    >
      <div className={Styles["DashboardNotes_label"]}>Notepad:</div>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type...."
        className={Styles["DashboardNotes_note__textarea"]}
        value={noteContent}
        onChange={handleTextareaChange}
        onClick={handleTextareaClick}
        readOnly={!editMode}
      />
    </div>
  );
};

export default DashboardNotes;