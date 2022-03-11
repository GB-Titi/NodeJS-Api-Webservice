let express = require("express");
const { json } = require("express/lib/response");
let app = express();

//define port
let port = 3001;

//define json datas
let movies = require('./datas/movies.json');

//Initilisation BDD
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'moviesApi';
let db;
MongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to server");
    db = client.db(dbName);

    // Middleware pour récupération requete post
    app.use(express.json())

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Accept', 'application/json');
        res.setHeader('Accept', 'application/xml');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });

    //GET METHODS
    app.get("/", (req, res) => {
        res.json({ message: 'Root page' });
    })

    app.get('/movies', (req, res) => {
        res.status(200).json(movies);
        res.status(400).send('BAD REQUEST');
    })

    app.get('/movies/:id', (req, res) => {
        let id = parseInt(req.params.id);
        let movie = movies.find(movie => movie.id === id);

        res.status(404).send('Ressource doesn\'t exist, <br/> Try an other id');
        res.status(200).json(movie);
    })

    //POST METHODS
    app.post('/movies', (req, res) => {
        movies.push(req.body);
        res.status(400).send('BAD REQUEST <br/> Vérifiez votre JSON');
        res.status(422).send('Can\'t validate.');
        res.status(200).json(movies);
        if (db.collection('Movies')) {
            db.collection('Movies').insertOne(json(movieList), function (err, res) {
                if (err) throw err;
                console.log("Document inserted");
            });
        } else {
            db.createCollection('Movies');
            db.collection('Movies').insertMany(json(movieList), function (err, res) {
                if (err) throw err;
                console.log("Document inserted");
            });
        }
    })

    //PUT METHODS
    app.put('/movies/:id', (req, res) => {
        let id = parseInt(req.params.id);
        let movie = movies.find(movie => movie.id === id);

        movie.name = req.body.name;
        movie.description = req.body.description;
        movie.date = req.body.date;
        movie.note = req.body.note;

        res.status(404).send('Ressource doesn\'t exist');
        res.status(400).send('BAD REQUEST');
        res.status(422).send('Can\'t validate.');
        res.status(200).json(movie);
    })

    //DELETE METHODS
    app.delete('/movies/:id', (req, res) => {
        let id = parseInt(req.params.id);
        let movie = movies.find(movie => movie.id === id);

        movies.splice(movies.indexOf(movie), 1);
        res.status(400).send('BAD REQUEST');
        res.status(404).send('Ressource doesn\'t exist, try an other id');
        res.status(422).send('Can\'t validate.');
        res.status(200).json(movies);
    })

    function AddIntoDatabase(movieList) {
        if (db.Movies) {
            db.collection('Movies').insertOne(json(movieList), function (err, res) {
                if (err) throw err;
                console.log("Document inserted");
            });
        } else {
            db.createCollection('Movies');
            db.collection('Movies').insertMany(json(movieList), function (err, res) {
                if (err) throw err;
                console.log("Document inserted");
            });
        }
    }

    //run the application
    app.listen(port, () => {
        console.log(`running at port ${port}`);
    });

});
