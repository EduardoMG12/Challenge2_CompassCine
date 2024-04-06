import { ICreatMovieDTO } from '../../DTO/CreateMovieDTO';
import { IMovieRepository } from '../../Repository/IMovieRepository';



export class CreateMovieUseCase{
	private movieRepository: IMovieRepository;
	constructor(movieRepository: IMovieRepository){
		this.movieRepository = movieRepository;
	}
	async execute(filme: ICreatMovieDTO){
		return await this.movieRepository.save(filme);

	}
}