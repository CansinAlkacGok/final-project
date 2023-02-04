import React from "react";
import "../styles/NotesStyles.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useContext } from "react";
import MyContext from "../context/MyContext";
import toast, { Toaster } from "react-hot-toast";

export default function SingleHealthNote() {
  const navigate = useNavigate();
  const { notes, setNotes } = useContext(MyContext);
  const [singleHealthNote, setSingleHealthNote] = useState(null);
  const [singleBusinessNote, setSingleBusinessNote] = useState(null);
  const [singleInspirationsNote, setSingleInspirationsNote] = useState(null);
  const [singlePersonalNote, setSinglePersonalNote] = useState(null);
  const [editClicked, setEditClicked] = useState(false);

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

  // EDIT

  const handleChangeHealth = (event) => {
    if (event.target.name === "title") {
      setSingleHealthNote(event.target.value);
    } else if (event.target.name === "note") {
      setSingleHealthNote(event.target.value);
    }
  };

  const editHealthNotes = (e) => {
    e.preventDefault();
    fetch(`/notes/health/${id}`, {
      method: "PATCH",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        note: e.target.note.value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Note edited");
          setNotes([...notes, result.note]);
          setTimeout(() => {
            navigate("/home/notes");
          }, 1500);
        } else {
          toast.error(result.message);
        }
      });
  };

  /* const handleChangeBusiness = (e) => {
    if (e.target.name === "title") {
      setSingleBusinessNote(e.target.value);
    } else if (e.target.name === "note") {
      setSingleBusinessNote(e.target.value);
    }
  };

  const editBusinessNotes = (e) => {
    e.preventDefault();
    fetch(`/notes/business/${id}`, {
      method: "PATCH",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        note: e.target.note.value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Note edited");
          setNotes([...notes, result.note]);
          setTimeout(() => {
            navigate("/home/notes");
          }, 1500);
        } else {
          toast.error(result.message);
        }
      });
  }; */

/*   const handleChangeInspirations = (e) => {
    if (e.target.name === "title") {
      setSingleInspirationsNote(e.target.value);
    } else if (e.target.name === "note") {
      setSingleInspirationsNote(e.target.value);
    }
  }; 

  const editInspirationsNotes = (e) => {
    e.preventDefault();
    fetch(`/notes/inspirations/${id}`, {
      method: "PATCH",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        note: e.target.note.value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Note edited");
          setNotes([...notes, result.note]);
          setTimeout(() => {
            navigate("/home/notes");
          }, 1500);
        } else {
          toast.error(result.message);
        }
      });
  }; */

  return (
    <div className="singleNoteContainer">
      <Toaster position="top-center" />
      <div className="backButton">
        <button className="notesButton" onClick={goBack}>
          <AiOutlineArrowLeft />
        </button>
        {singleHealthNote && (
          <>
            <button
              className="notesButton"
              onClick={() => setEditClicked((current) => !current)}
            >
              Edit
            </button>
            <button
              className="notesButton"
              onClick={() => deleteHealthNote(id)}
            >
              Delete
            </button>
          </>
        )}
        {singleBusinessNote && (
          <>
         {/*    <button
              className="notesButton"
              onClick={() => setEditClicked((current) => !current)}
            >
              Edit
            </button> */}
            <button
              className="notesButton"
              onClick={() => deleteBusinessNote(id)}
            >
              delete
            </button>
          </>
        )}
        {singleInspirationsNote && (
          <>
           {/*  <button
              className="notesButton"
              onClick={() => setEditClicked((current) => !current)}
            >
              Edit
            </button> */}
            <button
              className="notesButton"
              onClick={() => deleteInspirationsNote(id)}
            >
              delete
            </button>
          </>
        )}
        {singlePersonalNote && (
          <>
            {/* <button
              className="notesButton"
              onClick={() => setEditClicked((current) => !current)}
            >
              Edit
            </button> */}
            <button
              className="notesButton"
              onClick={() => deletePersonalNote(id)}
            >
              delete
            </button>
          </>
        )}
      </div>

      {editClicked ===
        false(
          <>
            <h1 className="singleNoteTitle">
              {singleHealthNote ? singleHealthNote.title : ""}
            </h1>
            <h1 className="singleNoteTitle">
              {singleBusinessNote ? singleBusinessNote.title : ""}
            </h1>
            <h1 className="singleNoteTitle">
              {singleInspirationsNote ? singleInspirationsNote.title : ""}
            </h1>
            <h1 className="singleNoteTitle">
              {singlePersonalNote ? singlePersonalNote.title : ""}
            </h1>

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
          </>
        )}
      {editClicked === true && (
        <>
          <form onSubmit={editHealthNotes} className="editModal">
            <input
              className="notesInput"
              type="text"
              name="title"
              value={singleHealthNote.title}
              onChange={handleChangeHealth}
            />
            <textarea
              className="editNotesTextarea"
              type="text"
              name="note"
              value={singleHealthNote.note}
              onChange={handleChangeHealth}
            ></textarea>
            <button className="notesButton">Save</button>
          </form>
        </>
      )}

   {/*    {editClicked === true && (
        <>
          <form onSubmit={editBusinessNotes} className="editModal">
            <input
              className="notesInput"
              type="text"
              name="title"
              value={singleBusinessNote.title}
              onChange={handleChangeBusiness}
            />
            <textarea
              className="editNotesTextarea"
              type="text"
              name="note"
              value={singleBusinessNote.note}
              onChange={handleChangeBusiness}
            ></textarea>
            <button className="notesButton">Save</button>
          </form>
        </>
      )} */}

      {/* {editClicked === true && singleInspirationsNote && (
        <>
          <form onSubmit={editInspirationsNotes} className="editModal">
            <input
              className="notesInput"
              type="text"
              name="title"
              value={singleInspirationsNote.title}
              onChange={handleChangeInspirations}
            />
            <textarea
              className="editNotesTextarea"
              type="text"
              name="note"
              value={singleInspirationsNote.note}
              onChange={handleChangeInspirations}
            ></textarea>
            <button className="notesButton">Save</button>
          </form>
        </>
      )} */}
    </div>
  );
}
