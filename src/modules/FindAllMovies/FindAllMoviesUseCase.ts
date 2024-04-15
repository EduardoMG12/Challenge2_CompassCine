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
		const moveis =  await this.movieRepository.findByAll();
		let novoArrayObjeto = [];
		for (let i = 0;  i < moveis.length; i++){
			for (let h = 0; h < moveis[i].sessoes.length; h++){
				const idSessao = (moveis[i].sessoes[h].toString());
				const sess = (await this.sessaoReposytory.findById(idSessao));
				novoArrayObjeto.push(sess);
			}
			moveis[i].sessoes = novoArrayObjeto;
			novoArrayObjeto = [];
		}
		

		return moveis;
	}
}