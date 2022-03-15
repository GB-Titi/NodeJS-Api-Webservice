const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const movieController = require('./controller/movie.controller')



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/movies', (req, res) => {
    movieController.getmovies().then(data => res.json(data));
});

app.post('/api/movie', (req, res) => {
    console.log(req.body);
    movieController.createmovie(req.body.movie).then(data => res.json(data));
});

app.put('/api/movie', (req, res) => {
    movieController.updatemovie(req.body.movie).then(data => res.json(data));
});

app.delete('/api/movie/:id', (req, res) => {
    movieController.deletemovie(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})