import { PostgreeMovieRepository } from '../../Repository/Implementations/MovieRepository';
import { DeleteMovieController } from './DeleteMovieController';
import { DeleteMovieUseCase } from './DeleteMovieUseCase';

export const movieRepository = new PostgreeMovieRepository();
export const deleteMovieUseCase = new DeleteMovieUseCase(movieRepository);
export const deleteMovieController = new DeleteMovieController(deleteMovieUseCase);
