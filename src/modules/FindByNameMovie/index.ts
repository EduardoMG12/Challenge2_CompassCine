import { MovieRepository } from '../../Repository/Implementations/MovieRepository';
import { findByNameMovieController } from './FindByNameMovieController';
import { findByNameMovieUserCase } from './FindByNameMovieUserCase';

export const movieRepository =  new MovieRepository();
export const FindByNameMovieUserCase = new findByNameMovieUserCase(movieRepository);
export const FindByNameMovieController = new findByNameMovieController(FindByNameMovieUserCase);