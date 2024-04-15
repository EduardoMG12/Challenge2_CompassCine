import { PostgreeMovieRepository } from '../../Repository/Implementations/MovieRepository';
import { UpdateMovieController } from './UpdateMovieController';
import { UpdateMovieUseCase } from './UpdateMovieUseCase';

export const movieRepository = new PostgreeMovieRepository();
export const updateMovieuseCase = new UpdateMovieUseCase(movieRepository);
export const updateMovieController = new UpdateMovieController(updateMovieuseCase);