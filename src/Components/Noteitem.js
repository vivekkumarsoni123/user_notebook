import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCardClick = (e) => {
    // Don't trigger if clicking on buttons or read more link
    if (e.target.closest('button') || e.target.closest('.read-more-btn')) {
      return;
    }
    props.openReadModal(note);
  };

  const shouldShowReadMore = note.description.length > 300;
  const displayText = isExpanded 
    ? note.description 
    : note.description.length > 300 
      ? `${note.description.substring(0, 300)}...` 
      : note.description;

  return (
    <>
      <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 mb-4">
        <div className="card card-modern h-100 note-card" onClick={handleCardClick}>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="flex-grow-1">
                <h5 className="card-title fw-bold mb-2 text-primary note-title">
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

            <div className="note-content mb-3">
              <div className={`note-description ${isExpanded ? 'expanded' : ''}`}>
                {displayText.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {shouldShowReadMore && (
                <button 
                  className="btn btn-link text-primary p-0 read-more-btn"
                  onClick={toggleExpanded}
                >
                  {isExpanded ? (
                    <>
                      <i className="fas fa-chevron-up me-1"></i>
                      Show Less
                    </>
                  ) : (
                    <>
                      <i className="fas fa-chevron-down me-1"></i>
                      Read More
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mt-auto">
              <div className="d-flex align-items-center">
                <small className="text-muted me-2">
                  <i className="fas fa-calendar me-1"></i>
                  {formatDate(note.date)}
                </small>
                <small className="text-primary opacity-75">
                  <i className="fas fa-mouse-pointer me-1"></i>
                  Click to read
                </small>
              </div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-outline-success"
                  onClick={(e) => {
                    e.stopPropagation();
                    props.openReadModal(note);
                  }}
                  title="Read full article"
                >
                  <i className="fas fa-book-open"></i>
                </button>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateNote(note);
                  }}
                  title="Edit article"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(note._id);
                  }}
                  title="Delete article"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
