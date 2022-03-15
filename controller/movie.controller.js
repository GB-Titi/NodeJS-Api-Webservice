const movieservice  = require('../service/movie.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getMovies() {
        logger.info('Controller: getMovies')
        return await movieservice.getMovies();
    }

    async createMovie(movie) {
        logger.info('Controller: createMovie', movie);
        return await movieservice.createMovie(movie);
    }

    async updateMovie(movie) {
        logger.info('Controller: updateMovie', movie);
        return await movieservice.updateMovie(movie);
    }

    async deleteMovie(movieId) {
        logger.info('Controller: deleteMovie', movieId);
        return await movieservice.deleteMovie(movieId);
    }
}
module.exports = new TodoController();