import { IMovieRepository } from '../../Repository/IMovieRepository';
import { ISessionRepository } from '../../Repository/ISessionRepository';

export class findAllMovieUseCase{
	private movieRepository: IMovieRepository;
	private sessaoReposytory: ISessionRepository;
	constructor(movieRepository: IMovieRepository, sessaoRepository: ISessionRepository){
		this.movieRepository = movieRepository;
		this.sessaoReposytory = sessaoRepository;
	}
	async execute(){
		const movies =  await this.movieRepository.findByAll();
		const newArrayObject = [];
		for (let i = 0;  i < movies.length; i++){
			for (let h = 0; h < movies[i].sessoes.length; h++){
				const sessionId = (movies[i].sessoes[h].toString());
				const session = (await this.sessaoReposytory.findById(sessionId));
				newArrayObject.push(session);
			}
			movies[i].sessoes = newArrayObject;
			
		}
		

		return movies;
	}
}