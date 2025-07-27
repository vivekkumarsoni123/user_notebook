<<<<<<< HEAD
const { type } = require('@testing-library/user-event/dist/type');
=======
// const { type } = require('@testing-library/user-event/dist/type');
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
const mongoose = require('mongoose')
const {Schema} = mongoose;


const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        reqquire: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
  });


<<<<<<< HEAD
  module.exports = mongoose.model('notes',NotesSchema);
=======
  module.exports = mongoose.model('notes',NotesSchema);
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
