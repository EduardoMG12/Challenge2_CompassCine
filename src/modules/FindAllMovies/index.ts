import { FindAllMoviesController } from './FindAllMoviesController';
import { FindAllUseCase } from './FindAllUseCase';
import { PostgreeMovieRepository } from '../../Repository/Implementations/PostgreMovieRepository';

export const postgreeMovieRepository = new PostgreeMovieRepository();
export const findAllUseCase = new FindAllUseCase(postgreeMovieRepository);
export const findAllMoviesController = new FindAllMoviesController(findAllUseCase);