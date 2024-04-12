import { ISessionRepository } from '../../Repository/ISessionRepository';

export class FindAllSessionsUseCase{
	private sessionsRepository: ISessionRepository;
	constructor(sessionsRepository: ISessionRepository){
		this.sessionsRepository = sessionsRepository;
	}
	async execute(){
		return await this.sessionsRepository.findByAll();
	}
}