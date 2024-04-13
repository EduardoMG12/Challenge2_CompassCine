import { ICreateTicket } from '../../DTO/CreateTicket';
import { ITicketRepository } from '../../Repository/ITicketRepository';

export class CreateTicketUseCase{
	private ticketRepository: ITicketRepository;
	constructor(ticketRepository: ITicketRepository){
		this.ticketRepository = ticketRepository;
	}
	async execute(ticket: ICreateTicket){
		return await this.ticketRepository.save(ticket);
	}
}