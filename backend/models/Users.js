// const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose')
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        reqquire: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

  const user = mongoose.model('user',UserSchema);
//   user.createIndexes();
  module.exports = user;
