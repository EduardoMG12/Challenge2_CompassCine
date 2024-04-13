import { PostgreeMovieRepository } from '../../Repository/Implementations/PostgreMovieRepository';
import { findByNameMovieController } from './FindByNameMovieController';
import { findByNameMovieUserCase } from './FindByNameMovieUserCase';

export const MovieRepository =  new PostgreeMovieRepository();
export const FindByNameMovieUserCase = new findByNameMovieUserCase(MovieRepository);
export const FindByNameMovieController = new findByNameMovieController(FindByNameMovieUserCase);