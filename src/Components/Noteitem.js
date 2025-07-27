import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
<<<<<<< HEAD
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card card-modern h-100">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div className="flex-grow-1">
              <h5 className="card-title fw-bold mb-2 text-primary">
                {note.title}
              </h5>
              {note.tag && (
                <span className="badge bg-primary rounded-pill mb-2">
                  <i className="fas fa-tag me-1"></i>
                  {note.tag}
                </span>
              )}
            </div>
          </div>

          <p className="card-text text-muted mb-3">
            {note.description.length > 100
              ? `${note.description.substring(0, 100)}...`
              : note.description}
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              <i className="fas fa-calendar me-1"></i>
              {formatDate(note.date)}
            </small>
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => updateNote(note)}
                title="Edit note"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteNote(note._id)}
                title="Delete note"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
=======
  const {deleteNote} = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description} ...
          </p>
          
            <i className="fa-regular fa-trash-can align-items-right" onClick={()=> {deleteNote(note._id)}}></i>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={()=> {updateNote(note)}}></i>
          
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
