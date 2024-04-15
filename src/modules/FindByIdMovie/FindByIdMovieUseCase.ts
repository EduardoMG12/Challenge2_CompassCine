import { IMovieRepository } from '../../Repository/IMovieRepository';

export class FindByIdMovieUsecase{
	private movieRepository: IMovieRepository;
	constructor(movieRepository:IMovieRepository){
		this.movieRepository = movieRepository;
	}
	async execute(id:string){
		return await this.movieRepository.findById(id);
	}
}