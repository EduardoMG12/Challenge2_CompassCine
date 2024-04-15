import { PostgreeMovieRepository } from '../../Repository/Implementations/PostgreMovieRepository';
import { PostgresSessionRepository } from '../../Repository/Implementations/PostgresSessionRepository';
import { findAllMovieController } from './FindAllMoviesController';
import { findAllMovieUseCase } from './FindAllMoviesUseCase';


export const sessaoRepository = new PostgresSessionRepository();
export const MovieRepository = new PostgreeMovieRepository();
export const FindAllMoviesUsercase = new findAllMovieUseCase(MovieRepository,sessaoRepository);
export const FindAllMoviesController = new findAllMovieController(FindAllMoviesUsercase);