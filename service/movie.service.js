const movieRepository  = require('../repository/movie.repository');

class movieservice {

    constructor() {}

    async getmovies() {
        return await movieRepository.getmovies();
    }

    async createmovie(movie) {
        return await movieRepository.createmovie(movie);
    }

    async updatemovie(movie) {
        return await movieRepository.updatemovie(movie);
    }

    async deletemovie(movieId) {
        return await movieRepository.deletemovie(movieId);
    }

}

module.exports = new movieservice();