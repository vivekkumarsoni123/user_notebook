import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {
    const host = "https://user-notebook-2.onrender.com/"; 
    const notesInitial = []
    const [notes, setnotes] = useState(notesInitial);

      //get all Notes
      const getnotes = async ()=> {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchuser`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
        });

        const json = await response.json();
        console.log(json)

        setnotes(json)
      }

      //Add a Note
      const addNote = async (title,description,tag)=> {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({ title, description, tag }),
        });

        const note = await response.json();
        setnotes(notes.concat(note))

      }




      //Edit a Note
      const editNote= async (id,title,description,tag)=> {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({ title, description, tag }),
        });
        const json =  await response.json();
        console.log(json);
      
      
        // logic to edit 
        for(let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id) {
            notes[index].title = title;
            notes[index].description = description;
            notes[index].tag = tag;
            break;
            
          }
        }
        setnotes(notes);   
      }
      

      //Delete a Note
      const deleteNote= async (id)=> {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
        });
        const json =  await response.json();
        console.log(json);

        //logic to delete note
        const newnotes = notes.filter((note)=>{return note._id !== id});
        setnotes(newnotes);
      }
      
    return (
        <NoteContext.Provider value={{notes, notesInitial, addNote, deleteNote, editNote, getnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
