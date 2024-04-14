import { ITicketRepository } from '../../Repository/ITicketRepository';

export class FindAllTicketUseCase{
	private ticketRepository: ITicketRepository;
	constructor(ticketRepository:ITicketRepository){
		this.ticketRepository= ticketRepository;
	}
	async execute(){
		return await this.ticketRepository.findByAll();
	}
}