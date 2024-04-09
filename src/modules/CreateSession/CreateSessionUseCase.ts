import { ICreateSession } from '../../DTO/CreateSessionDTO';
import { ISessionRepository } from '../../Repository/ISessionRepository';

export class CreateSessionUseCase{
	private sessionRepository: ISessionRepository;
	constructor(sessionRepository: ISessionRepository){
		this.sessionRepository = sessionRepository;
	}
	async execute(sessao: ICreateSession){
		return this.sessionRepository.save(sessao);

	}
}