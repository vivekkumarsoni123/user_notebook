import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../Context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getnotes, editNote } = context;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login if no token is found
      navigate("/login");
    } else {
      // Fetch notes if authenticated
      getnotes();
    }
  }, [getnotes, navigate]); // Dependency array includes `getnotes` and `navigate`

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const [readNote, setReadNote] = useState(null);

  const updateNote = (currentnote) => {
    ref.current.click();
    setNote({
      id: currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });
  };

  const openReadModal = (currentnote) => {
    setReadNote(currentnote);
    refRead.current.click();
  };

  const handleClick = () => {
    console.log("Updating the note");
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const ref = useRef(null);
  const refClose = useRef(null);
  const refRead = useRef(null);
  const refReadClose = useRef(null);

  return (
    <>
      <AddNote />
      
      {/* Edit Modal */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content card-modern">
            <div className="modal-header border-0 pb-0">
              <h1 className="modal-title fs-4 fw-bold gradient-text" id="exampleModalLabel">
                <i className="fas fa-edit me-2"></i>
                Edit Article
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-medium">
                    <i className="fas fa-heading me-2 text-primary"></i>
                    Article Title
                  </label>
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded-3"
                    id="etitle"
                    name="etitle"
                    onChange={onchange}
                    value={note.etitle}
                    placeholder="Enter article title..."
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label fw-medium">
                    <i className="fas fa-align-left me-2 text-primary"></i>
                    Article Content
                  </label>
                  <textarea
                    className="form-control border-0 bg-light rounded-3"
                    id="edescription"
                    name="edescription"
                    onChange={onchange}
                    value={note.edescription}
                    rows="4"
                    placeholder="Enter article content..."
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="tag" className="form-label fw-medium">
                    <i className="fas fa-tag me-2 text-primary"></i>
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded-3"
                    id="etag"
                    name="etag"
                    onChange={onchange}
                    value={note.etag}
                    placeholder="Enter category..."
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer border-0 pt-0">
              <button
                ref={refClose}
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                <i className="fas fa-times me-2"></i>
                Cancel
              </button>
              <button type="button" className="btn btn-modern" onClick={handleClick}>
                <i className="fas fa-save me-2"></i>
                Update Article
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Read Modal */}
      <button
        ref={refRead}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#readModal"
      >
        Launch read modal
      </button>

      <div
        className="modal fade"
        id="readModal"
        tabIndex="-1"
        aria-labelledby="readModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content card-modern">
            <div className="modal-header border-0 pb-0">
              <div className="flex-grow-1">
                <h1 className="modal-title fs-4 fw-bold gradient-text" id="readModalLabel">
                  <i className="fas fa-book-open me-2"></i>
                  {readNote?.title}
                </h1>
                {readNote?.tag && (
                  <span className="badge bg-primary rounded-pill mt-2">
                    <i className="fas fa-tag me-1"></i>
                    {readNote.tag}
                  </span>
                )}
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="article-meta mb-4">
                <small className="text-muted">
                  <i className="fas fa-calendar me-1"></i>
                  Published on {readNote ? formatDate(readNote.date) : ''}
                </small>
              </div>
              
              <div className="article-content">
                {readNote?.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="article-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="modal-footer border-0 pt-0">
              <button
                ref={refReadClose}
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                <i className="fas fa-times me-2"></i>
                Close
              </button>
              <button 
                type="button" 
                className="btn btn-modern"
                onClick={() => {
                  refReadClose.current.click();
                  updateNote(readNote);
                }}
              >
                <i className="fas fa-edit me-2"></i>
                Edit Article
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Display Section */}
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="gradient-text fw-bold mb-0">
              <i className="fas fa-book-open me-3"></i>
              Your Articles
            </h2>
            <div className="d-flex align-items-center">
              <span className="badge bg-primary rounded-pill me-2">
                {notes.length} {notes.length === 1 ? 'Article' : 'Articles'}
              </span>
            </div>
          </div>
          
          {notes.length === 0 ? (
            <div className="text-center py-5">
              <div className="glass-effect p-5 rounded-4 shadow-custom">
                <i className="fas fa-book fa-4x text-muted mb-4"></i>
                <h4 className="text-dark mb-3">No articles yet!</h4>
                <p className="text-muted mb-0">
                  Start creating your first article to build your personal knowledge library
                </p>
              </div>
        </div>
          ) : (
            <div className="row g-4">
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} openReadModal={openReadModal} />;
        })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notes;
