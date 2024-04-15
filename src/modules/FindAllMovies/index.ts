
import { MovieRepository } from '../../Repository/Implementations/MovieRepository';
import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { findAllMovieController } from './FindAllMoviesController';
import { findAllMovieUseCase } from './FindAllMoviesUseCase';

export const sessaoRepository = new SessionRepository();
export const movieRepository = new MovieRepository();
export const FindAllMoviesUsercase = new findAllMovieUseCase(movieRepository,sessaoRepository);
export const FindAllMoviesController = new findAllMovieController(FindAllMoviesUsercase);