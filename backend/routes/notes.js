const express = require('express');
const router = express.Router();
const fetchuser = require('../Middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult} = require('express-validator');


// ROUTE 1: get notes of a user by passing the auth-token  "/api/notes/fetchuser" . login required
router.get('/fetchuser', fetchuser, async (req,res)=> {
    const notes = await Notes.find({user: req.user.id});
    res.json(notes);
})

// ROUTE 2: add note of a user by passing the auth-token  "/api/notes/addnote" . login required
router.get('/addnote', fetchuser, [
        body('title').isLength({ min: 3 }),
        body('description').isLength({ min: 5 }),
        body('tag').isLength({ min: 3 }),
    ] ,async (req,res)=> {

        try {
           const {title,description,tag} = req.body

            // if errors occur then return bad errors here itself
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

           const note = new Notes({
                title, description, tag, user: req.user.id
            })

            const savednote = await note.save();

            res.json(savednote);
        }
        catch (error) {
            console.error(error.message)
            res.status(500).send("Some Internal server error occured");
        } 
    
    
})

// ROUTE 3: update notes of a user by passing the auth-token: PUT  "/api/notes/updatenote" . login required
router.put('/updatenote/:id', fetchuser, async (req,res)=> {

    const {title,description,tag} = req.body;

    try {
        // new note data
        const newNote = {}

        if(title) {newNote.title = title};
        if(description) {newNote.description = description};
        if(tag) {newNote.tag = tag};
        
        //find the note to be updated and update it 
        let note = await Notes.findById(req.params.id);
        if(!note) {
            return res.status(404).send("Not Found");
        }

        if(note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json({note});
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some Internal server error occured");
    }
})


// ROUTE 4: delete notes of a user by passing the auth-token: DELETE  "/api/notes/deletenote" . login required
router.delete('/deletenote/:id', fetchuser, async (req,res)=> {

    try {
        //find the note to be updated and update it 
        let note = await Notes.findById(req.params.id);
        if(!note) {
            return res.status(404).send("Not Found");
        }

        if(note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"Success": "Your note has been deleted", note: note});
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some Internal server error occured");
    }
})

module.exports = router;