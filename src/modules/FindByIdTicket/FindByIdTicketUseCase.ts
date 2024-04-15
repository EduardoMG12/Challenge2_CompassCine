import { ITicketRepository } from '../../Repository/ITicketRepository';

export class FindByIdTicketuseCase{
	private ticketRepository:ITicketRepository;
	constructor(ticketRepository:ITicketRepository){
		this.ticketRepository = ticketRepository;
	}
	async execute(id:string){
		await this.ticketRepository.findById(id);
	}
}