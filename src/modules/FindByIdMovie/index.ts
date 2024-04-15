import { MovieRepository } from '../../Repository/Implementations/MovieRepository';
import { FindByIdMovieUsecase } from './FindByIdMovieUseCase';
import {FindByIdMovieController} from './FindByIdMovieController';

export const movieRepository = new MovieRepository();
export const FindByIdMovieUseCase = new FindByIdMovieUsecase(movieRepository);
export const findByIdMovieController = new FindByIdMovieController(FindByIdMovieUseCase);