import { MovieRepository } from '../../Repository/Implementations/MovieRepository';
import { DeleteMovieController } from './DeleteMovieController';
import { DeleteMovieUseCase } from './DeleteMovieUseCase';

export const movieRepository = new MovieRepository();
export const deleteMovieUseCase = new DeleteMovieUseCase(movieRepository);
export const deleteMovieController = new DeleteMovieController(deleteMovieUseCase);
