import React, { useContext, useState, useRef, useEffect } from "react";
import noteContext from "../Context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const textareaRef = useRef(null);

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [note.description]);

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
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
              <h3 className="gradient-text fw-bold mb-1">Create a New Article</h3>
              <p className="text-muted mb-0">Write your thoughts, ideas, or articles for future reading</p>
            </div>
          </div>

          <form onSubmit={handleClick}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="title" className="form-label fw-medium">
                  <i className="fas fa-heading me-2 text-primary"></i>
                  Article Title
                </label>
                <input
                  type="text"
                  placeholder="Enter a descriptive title for your article..."
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
                  Category
                </label>
                <input
                  type="text"
                  placeholder="e.g., Technology, Personal, Work, Ideas..."
                  value={note.tag}
                  className="form-control border-0 bg-light rounded-3"
                  id="tag"
                  name="tag"
                  onChange={onchange}
                />
                <div className="form-text">
                  Categorize your article for easy organization
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="form-label fw-medium">
                <i className="fas fa-align-left me-2 text-primary"></i>
                Article Content
              </label>
              <textarea
                ref={textareaRef}
                placeholder="Write your article content here. You can write as much as you want - this is your personal space for thoughts, ideas, research notes, or any content you want to save for later reading. Feel free to use paragraphs, lists, or any format that helps you organize your thoughts..."
                value={note.description}
                className="form-control border-0 bg-light rounded-3 auto-resize-textarea"
                id="description"
                name="description"
                onChange={onchange}
                rows="6"
                minLength="5"
                style={{ resize: 'none', overflow: 'hidden' }}
              ></textarea>
              <div className="form-text d-flex justify-content-between align-items-center">
                <span>Minimum 5 characters required</span>
                <span className={`${note.description.length > 1000 ? 'text-success' : 'text-muted'}`}>
                  {note.description.length} characters
                </span>
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
                    <small className={note.description.length >= 5 ? 'text-success' : 'text-muted'}>Content valid</small>
                  </div>
                </div>
              </div>
              
              <button
                disabled={note.description.length < 5 || note.title.length < 2}
                type="submit"
                className="btn btn-modern"
                onClick={handleClick}
              >
                <i className="fas fa-save me-2"></i>
                Save Article
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
