import { PostgreeMovieRepository } from '../../Repository/Implementations/PostgreMovieRepository';
import { FindByIdMovieUsecase } from './FindByIdMovieUseCase';
import {FindByIdMovieController} from './FindByIdMovieController';
export const MovieRepository = new PostgreeMovieRepository();
export const FindByIdMovieUseCase = new FindByIdMovieUsecase(MovieRepository);
export const findByIdMovieController = new FindByIdMovieController(FindByIdMovieUseCase);