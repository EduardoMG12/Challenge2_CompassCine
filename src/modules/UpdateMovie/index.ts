import { PostgreeMovieRepository } from '../../Repository/Implementations/PostgreMovieRepository';
import { UpdateMovieController } from './UpdateMovieController';
import { UpdateMovieUseCase } from './UpdateMovieUseCase';

export const movieRepository = new PostgreeMovieRepository();
export const updateMovieuseCase = new UpdateMovieUseCase(movieRepository);
export const updateMovieController = new UpdateMovieController(updateMovieuseCase);