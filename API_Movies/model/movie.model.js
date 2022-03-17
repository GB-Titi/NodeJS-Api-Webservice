const mongoose = require('mongoose');

const movieschema = new mongoose.Schema(
    {
        name: 'string',
        description: 'string',
        date: 'date',
        note: 'string'
    },
);

const movie = mongoose.model('movies', movieschema);

module.exports = {
    movie
}