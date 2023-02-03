import React from "react";
import "../styles/NotesStyles.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useContext } from "react";
import MyContext from "../context/MyContext";

export default function SingleHealthNote() {
  const navigate = useNavigate();
  const { notes, setNotes } = useContext(MyContext);
  const [singleHealthNote, setSingleHealthNote] = useState(null);
  const [singleBusinessNote, setSingleBusinessNote] = useState(null);
  const [singleInspirationsNote, setSingleInspirationsNote] = useState(null);
  const [singlePersonalNote, setSinglePersonalNote] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getSingleHealthNote(id);
    getSingleBusinessNote(id);
    getSingleInspirationsNote(id);
    getSinglePersonalNote(id);
  }, [id]);

  const goBack = () => {
    navigate("/home/notes");
  };

  // GET

  const getSingleHealthNote = (id) => {
    fetch(`/notes/health/${id}`, {
      method: "GET",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSingleHealthNote(result.note[0]);
        } else {
          console.log(result.message);
        }
      });
  };

  const getSingleBusinessNote = (id) => {
    fetch(`/notes/business/${id}`, {
      method: "GET",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSingleBusinessNote(result.note[0]);
        } else {
          console.log(result.message);
        }
      });
  };

  const getSingleInspirationsNote = (id) => {
    fetch(`/notes/inspirations/${id}`, {
      method: "GET",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSingleInspirationsNote(result.note[0]);
        } else {
          console.log(result.message);
        }
      });
  };

  const getSinglePersonalNote = (id) => {
    fetch(`/notes/personal/${id}`, {
      method: "GET",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSinglePersonalNote(result.note[0]);
        } else {
          console.log(result.message);
        }
      });
  };

  // DELETE

  const deleteHealthNote = (id) => {
    fetch(`/notes/health/${id}`, {
      method: "DELETE",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const newNotes = notes.filter((item) => item._id !== id);
          setNotes(newNotes);
          navigate("/home/notes");
        } else {
          console.log(result.message);
        }
      });
  };

  const deleteBusinessNote = (id) => {
    fetch(`/notes/business/${id}`, {
      method: "DELETE",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const newNotes = notes.filter((item) => item._id !== id);
          setNotes(newNotes);
          navigate("/home/notes");
        } else {
          console.log(result.message);
        }
      });
  };

  const deleteInspirationsNote = (id) => {
    fetch(`/notes/inspirations/${id}`, {
      method: "DELETE",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const newNotes = notes.filter((item) => item._id !== id);
          setNotes(newNotes);
          navigate("/home/notes");
        } else {
          console.log(result.message);
        }
      });
  };

  const deletePersonalNote = (id) => {
    fetch(`/notes/personal/${id}`, {
      method: "DELETE",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const newNotes = notes.filter((item) => item._id !== id);
          setNotes(newNotes);
          navigate("/home/notes");
        } else {
          console.log(result.message);
        }
      });
  };

  return (
    <div className="singleNoteContainer">
      <div className="backButton">
        <button className="notesButton" onClick={goBack}>
          <AiOutlineArrowLeft />
        </button>
        {singleHealthNote && (
          <button className="notesButton" onClick={() => deleteHealthNote(id)}>
            delete
          </button>
        )}
        {singleBusinessNote && (
          <button
            className="notesButton"
            onClick={() => deleteBusinessNote(id)}
          >
            delete
          </button>
        )}
        {singleInspirationsNote && (
          <button
            className="notesButton"
            onClick={() => deleteInspirationsNote(id)}
          >
            delete
          </button>
        )}
        {singlePersonalNote && (
          <button
            className="notesButton"
            onClick={() => deletePersonalNote(id)}
          >
            delete
          </button>
        )}
      </div>

      <h1>{singleHealthNote ? singleHealthNote.title : ""}</h1>
      <h1>{singleBusinessNote ? singleBusinessNote.title : ""}</h1>
      <h1>{singleInspirationsNote ? singleInspirationsNote.title : ""}</h1>
      <h1>{singlePersonalNote ? singlePersonalNote.title : ""}</h1>

      <p className="singleNoteParagraph">
        {singleHealthNote ? singleHealthNote.note : ""}
      </p>
      <p className="singleNoteParagraph">
        {singleBusinessNote ? singleBusinessNote.note : ""}
      </p>
      <p className="singleNoteParagraph">
        {singleInspirationsNote ? singleInspirationsNote.note : ""}
      </p>
      <p className="singleNoteParagraph">
        {singlePersonalNote ? singlePersonalNote.note : ""}
      </p>
    </div>
  );
}
