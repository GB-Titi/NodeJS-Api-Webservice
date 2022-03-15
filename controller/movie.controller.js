const movieservice  = require('../service/movie.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getmovies() {
        logger.info('Controller: getmovies')
        return await movieservice.getmovies();
    }

    async createmovie(movie) {
        logger.info('Controller: createmovie', movie);
        return await movieservice.createmovie(movie);
    }

    async updatemovie(movie) {
        logger.info('Controller: updatemovie', movie);
        return await movieservice.updatemovie(movie);
    }

    async deletemovie(movieId) {
        logger.info('Controller: deletemovie', movieId);
        return await movieservice.deletemovie(movieId);
    }
}
module.exports = new TodoController();