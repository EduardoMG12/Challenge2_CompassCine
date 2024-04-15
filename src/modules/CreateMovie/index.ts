import { CreateMovieController } from './CreateMovieController';
import { CreateMovieUseCase } from './CreateMovieUseCase';
import { MovieRepository } from '../../Repository/Implementations/MovieRepository';

export const movieRepository = new MovieRepository();
export const createMovieUseCase = new CreateMovieUseCase(movieRepository);
export const createMovieController = new CreateMovieController(createMovieUseCase);