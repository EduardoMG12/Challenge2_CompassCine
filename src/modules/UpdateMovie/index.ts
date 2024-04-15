import { MovieRepository } from '../../Repository/Implementations/MovieRepository';
import { UpdateMovieController } from './UpdateMovieController';
import { UpdateMovieUseCase } from './UpdateMovieUseCase';

export const movieRepository = new MovieRepository();
export const updateMovieuseCase = new UpdateMovieUseCase(movieRepository);
export const updateMovieController = new UpdateMovieController(updateMovieuseCase);