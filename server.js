const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const fs = require('fs')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8')

const movieController = require('./controller/movie.controller')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Accept-Encoding", "gzip, deflate");
    res.setHeader("Accept-language", "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3");
    res.setHeader('Accept', 'application/json');
    res.setHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));


app.get('/api/movies', (req, res) => {
    // res.status(400).send('BAD REQUEST');
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    movieController.getMovies(pageSize, page).then(data => res.json(data));
    // res.status(200).json(movies);
});

app.post('/api/movie', (req, res) => {
    console.log(req.body);
    movieController.createMovie(req.body.movie).then(data => res.json(data));
});

app.put('/api/movie', (req, res) => {
    movieController.updateMovie(req.body.movie).then(data => res.json(data));
});

app.delete('/api/movie/:id', (req, res) => {
    movieController.deleteMovie(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})