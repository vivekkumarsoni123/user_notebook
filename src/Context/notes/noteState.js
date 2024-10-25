import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {

    const notesInitial = [
        {
          "_id": "6708bbe2011e212835b26fe13",
          "user": "67038c658d61a1e02703838e",
          "title": "my title",
          "description": "herapheri",
          "tag": "personal",
          "date": "2024-10-11T05:47:14.798Z",
          "__v": 0
        },
        {
          "_id": "6708bc13011e212835b26fe15",
          "user": "67038c658d61a1e02703838e",
          "title": "my title",
          "description": "herapheri",
          "tag": "personal",
          "date": "2024-10-11T05:48:03.756Z",
          "__v": 0
        },
        {
          "_id": "670e6a0d96fdc916591d6fd11",
          "user": "67038c658d61a1e02703838e",
          "title": "my title",
          "description": "herapheri",
          "tag": "personal",
          "date": "2024-10-15T13:11:41.903Z",
          "__v": 0
        },
        {
          "_id": "6708bbe2011e222835b26fe13",
          "user": "67038c658d61a1e02703838e",
          "title": "my title",
          "description": "herapheri",
          "tag": "personal",
          "date": "2024-10-11T05:47:14.798Z",
          "__v": 0
        },
        {
          "_id": "6708bc13011e222835b26fe15",
          "user": "67038c658d61a1e02703838e",
          "title": "my title",
          "description": "herapheri",
          "tag": "personal",
          "date": "2024-10-11T05:48:03.756Z",
          "__v": 0
        },
        {
          "_id": "670e6a0d96fdc963591d6fd11",
          "user": "67038c658d61a1e02703838e",
          "title": "my title",
          "description": "herapheri",
          "tag": "personal",
          "date": "2024-10-15T13:11:41.903Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesInitial);
      
    return (
        <NoteContext.Provider value={{notes, notesInitial}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;