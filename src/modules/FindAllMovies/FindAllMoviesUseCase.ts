import { IMovieRepository } from '../../Repository/IMovieRepository';

export class findAllMovieUseCase{
	private movieRepository: IMovieRepository;
	constructor(movieRepository: IMovieRepository){
		this.movieRepository = movieRepository;
	}
	async execute(){
		return this.movieRepository.findByAll();
	}
}