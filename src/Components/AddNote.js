import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";




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
    </div>
  );
};

export default AddNote;
