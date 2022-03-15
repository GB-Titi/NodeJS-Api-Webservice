const { connect, disconnect } = require('../config/db.config');
const { movie } = require('../model/movie.model');
const logger = require('../logger/api.logger');

class movieRepository {

    constructor() {
        connect();
    }

    async getmovies() {
        const movies = await movie.find({});
        console.log('movies:::', movies);
        return movies;
    }

    async createmovie(movie) {
        let data = {};
        try {
            data = await movie.create(movie);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updatemovie(movie) {
        let data = {};
        try {
            data = await movie.updateOne(movie);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deletemovie(movieId) {
        let data = {};
        try {
            data = await movie.deleteOne({_id : movieId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new movieRepository();