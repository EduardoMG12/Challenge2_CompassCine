import { IMovieRepository } from '../../Repository/IMovieRepository';

export class findByNameMovieUserCase{
	private movieRepository: IMovieRepository;
	constructor(movieRepository:IMovieRepository){
		this.movieRepository = movieRepository;
	}
	async execute(name:string){
		return this.movieRepository.findByName(name);
	}
}