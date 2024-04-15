import { ICreateTicketDTO } from '../../DTO/CreateTicketDTO';
import { ITicketRepository } from '../../Repository/ITicketRepository';

export class CreateTicketUseCase{
	private ticketRepository: ITicketRepository;
	constructor(ticketRepository: ITicketRepository){
		this.ticketRepository = ticketRepository;
	}
	async execute(ticket: ICreateTicketDTO){
		return await this.ticketRepository.save(ticket);
	}
}