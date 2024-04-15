import { CreateMovieController } from './CreateMovieController';
import { CreateMovieUseCase } from './CreateMovieUseCase';
import { PostgreeMovieRepository } from '../../Repository/Implementations/MovieRepository';

export const postgreeMovieRepository = new PostgreeMovieRepository();
export const createMovieUseCase = new CreateMovieUseCase(postgreeMovieRepository);
export const createMovieController = new CreateMovieController(createMovieUseCase);