const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Audiobooks = new Schema({
    book_title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Audiobooks', Audiobooks);