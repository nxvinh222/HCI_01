const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Users = new Schema({
    email: {
        type: String
    },
    passwpord: {
        type: String
    },
    age: {
        type: Number
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('Users', Users);