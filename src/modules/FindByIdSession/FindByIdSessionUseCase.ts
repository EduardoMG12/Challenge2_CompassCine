import { ISessionRepository } from '../../Repository/ISessionRepository';

export class FindByIdSessionUsecase{
	private sessionRepository: ISessionRepository;
	constructor(sessionRepository:ISessionRepository){
		this.sessionRepository=sessionRepository;
	}
	async execute(id:string){
		return await this.sessionRepository.findById(id);
	}
}