import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";

<<<<<<< HEAD
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mb-5">
      <div className="card card-modern">
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-4">
            <div className="me-3">
              <i className="fas fa-plus-circle fa-2x text-primary"></i>
            </div>
            <div>
              <h3 className="gradient-text fw-bold mb-1">Add a New Note</h3>
              <p className="text-muted mb-0">Capture your thoughts and ideas</p>
            </div>
          </div>

          <form onSubmit={handleClick}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="title" className="form-label fw-medium">
                  <i className="fas fa-heading me-2 text-primary"></i>
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter note title..."
                  value={note.title}
                  className="form-control border-0 bg-light rounded-3"
                  id="title"
                  name="title"
                  onChange={onchange}
                  minLength="2"
                />
                <div className="form-text">
                  Minimum 2 characters required
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="tag" className="form-label fw-medium">
                  <i className="fas fa-tag me-2 text-primary"></i>
                  Tag
                </label>
                <input
                  type="text"
                  placeholder="Enter tag (optional)..."
                  value={note.tag}
                  className="form-control border-0 bg-light rounded-3"
                  id="tag"
                  name="tag"
                  onChange={onchange}
                />
                <div className="form-text">
                  Add a tag to organize your notes
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="form-label fw-medium">
                <i className="fas fa-align-left me-2 text-primary"></i>
                Description
              </label>
              <textarea
                placeholder="Write your note content here..."
                value={note.description}
                className="form-control border-0 bg-light rounded-3"
                id="description"
                name="description"
                onChange={onchange}
                rows="4"
                minLength="5"
              ></textarea>
              <div className="form-text">
                Minimum 5 characters required
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <div className="d-flex align-items-center">
                    <i className={`fas fa-check-circle me-2 ${note.title.length >= 2 ? 'text-success' : 'text-muted'}`}></i>
                    <small className={note.title.length >= 2 ? 'text-success' : 'text-muted'}>Title valid</small>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <i className={`fas fa-check-circle me-2 ${note.description.length >= 5 ? 'text-success' : 'text-muted'}`}></i>
                    <small className={note.description.length >= 5 ? 'text-success' : 'text-muted'}>Description valid</small>
                  </div>
                </div>
              </div>
              
              <button
                disabled={note.description.length < 5 || note.title.length < 2}
                type="submit"
                className="btn btn-modern"
                onClick={handleClick}
              >
                <i className="fas fa-plus me-2"></i>
                Add Note
              </button>
            </div>
          </form>
        </div>
      </div>
=======



const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    
    const [note,setNote] = useState({title: "",description:"",tag:""})

    const handleClick=(e)=> {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title: "",description:"",tag:""})
    }
    const onchange=(e)=> {
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title of Note</label>
          <input type="text" placeholder="We'll never share your note to anyone" value={note.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" 
            onChange={onchange} />
          
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label"> Description of Note </label>
          <input type="text" placeholder="Minimum 5 char" value={note.description} className="form-control" id="description" name="description" onChange={onchange} />
          
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label"> Tag </label>
          <input type="text" value={note.tag} className="form-control" id="tag" name="tag" onChange={onchange} />
        </div>
        
        <button disabled={note.description.length<5 || note.title.length<2} type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
    </div>
  );
};

export default AddNote;
