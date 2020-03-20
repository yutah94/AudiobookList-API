const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const audiobooksRoutes = express.Router();
const PORT = 5556;

let Audiobooks = require('./audiobooks.model');

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb://127.0.0.1:27017/audiobooks', { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })

mongoose.connect(process.env.ATLAS_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true} )
.then(console.log('The connection is good'))
.catch(err => {console.log(err)});

audiobooksRoutes.route('/').get(function(req, res) {
    Audiobooks.find(function(err, audiobooks) {
        if (err) {
            console.log(err);
        } else {
            res.json(audiobooks);
        }
    });
});

audiobooksRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Audiobooks.findById(id, function(err, audiobooks) {
        res.json(audiobooks);
    });
});

audiobooksRoutes.route('/update/:id').post(function(req, res) {
    Audiobooks.findById(req.params.id, function(err, audiobooks) {
        if (!audiobooks)
            res.status(404).send("data is not found");
        else
            audiobooks.book_title = req.body.book_title;
            audiobooks.author = req.body.author;
            audiobooks.genre = req.body.genre;
            audiobooks.completed = req.body.completed;

            audiobooks.save().then(audiobooks => {
                res.json('Audiobooks updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

audiobooksRoutes.route('/add').post(function(req, res) {
    let audiobooks = new Audiobooks(req.body);
    audiobooks.save()
        .then(audiobooks => {
            res.status(200).json({'audiobooks': 'audiobooks added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new audiobook failed');
        });
});

audiobooksRoutes.route('/:id').delete(function(req, res) {
    let id = req.params.id;
    Audiobook.deleteOne({_id: id}).exec()
    .then(res => {
        console.log(res)
        res.json(audiobooks);
    })
    .catch(err => {
        console.log(err);
    })
});

app.use('/audiobooks', audiobooksRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});