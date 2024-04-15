import { MovieRepository } from '../../Repository/Implementations/MovieRepository';
import { findAllMovieController } from './FindAllMoviesController';
import { findAllMovieUseCase } from './FindAllMoviesUseCase';

export const movieRepository = new MovieRepository();
export const FindAllMoviesUsercase = new findAllMovieUseCase(movieRepository);
export const FindAllMoviesController = new findAllMovieController(FindAllMoviesUsercase);