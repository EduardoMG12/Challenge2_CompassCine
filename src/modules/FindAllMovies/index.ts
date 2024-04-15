import { PostgreeMovieRepository } from '../../Repository/Implementations/MovieRepository';
import { findAllMovieController } from './FindAllMoviesController';
import { findAllMovieUseCase } from './FindAllMoviesUseCase';

export const MovieRepository = new PostgreeMovieRepository();
export const FindAllMoviesUsercase = new findAllMovieUseCase(MovieRepository);
export const FindAllMoviesController = new findAllMovieController(FindAllMoviesUsercase);