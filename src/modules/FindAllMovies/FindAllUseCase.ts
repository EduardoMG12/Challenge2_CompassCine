import { IMovieRepository } from '../../Repository/IMovieRepository';



export class FindAllUseCase{
	private movieRepository: IMovieRepository;
	constructor(movieRepository: IMovieRepository){
		this.movieRepository = movieRepository;
	}
	async execute(){
		return await this.movieRepository.findByAll();
		
	}
}