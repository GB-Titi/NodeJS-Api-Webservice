const { connect, disconnect } = require('../config/db.config');
const { movie } = require('../model/movie.model');
const logger = require('../logger/api.logger');

class movieRepository {

    constructor() {
        connect();
    }

    async getMovies(pageSize, page) {
        const movies = await movie.find({}).limit(pageSize).skip(pageSize * page);;
        console.log('movies:::', movies);
        return movies;
    }

    async createMovie(movie) {
        let data = {};
        try {
            data = await movie.create(movie);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateMovie(movie) {
        let data = {};
        try {
            data = await movie.updateOne(movie);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteMovie(movieId) {
        let data = {};
        try {
            data = await movie.deleteOne({_id : movieId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

    async getmovie(movieId) {
        let data = {};
        try {
            data = await movie.findById({_id : movieId});
        }
        catch(err){
            logger.error("Error" + err);
        }
        return data;
    }

    async searchmovie(movieName) {
        let data = {}
        try {
            data = await movie.find( {name : movieName});
        }
        catch(err){
            logger.error("error" + err)
        }
        return data
    }

}

module.exports = new movieRepository();