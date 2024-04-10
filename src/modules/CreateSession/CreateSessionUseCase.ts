import { ICreateSessionDTO } from '../../DTO/CreateSessionDTO';
import { ISessionRepository } from '../../Repository/ISessionRepository';

export class CreateSessionUseCase{
	private sessionRepository: ISessionRepository;
	constructor(sessionRepository: ISessionRepository){
		this.sessionRepository = sessionRepository;
	}
	async execute(session: ICreateSessionDTO){
		try{
			return await this.sessionRepository.save(session);

		}catch (error){
			throw new Error(error as string);
		}

	}
}