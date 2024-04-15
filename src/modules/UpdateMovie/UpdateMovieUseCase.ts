import { ICreatMovieDTO } from '../../DTO/CreateMovieDTO';
import { IMovieRepository } from '../../Repository/IMovieRepository';

export class UpdateMovieUseCase{
	private movieRepository:IMovieRepository;
	constructor(movieRepository:IMovieRepository){
		this.movieRepository = movieRepository;
	}
	async execute(id:string,movie:ICreatMovieDTO){
		return this.movieRepository.update(id,movie);
	}
}