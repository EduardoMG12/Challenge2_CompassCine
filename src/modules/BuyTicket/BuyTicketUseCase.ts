import { ICreateTicket } from '../../DTO/CreateTicket';
import { ISessionRepository } from '../../Repository/ISessionRepository';
import { ITicketRepository } from '../../Repository/ITicketRepository';

export class BuyTicketUseCase{
	private ticketRepository: ITicketRepository;
	private sessionRepository: ISessionRepository;

	constructor(ticketRepository: ITicketRepository, sessionRepository: ISessionRepository){
		this.ticketRepository = ticketRepository;
		this.sessionRepository = sessionRepository;
	}
	async execute(room: ICreateTicket){
		try{
			const session = await this.sessionRepository.findById(room.sessaoId);
			if(!session){
				throw new Error('Sessão não encontrada');
			}
			const allTicketsSession = await this.ticketRepository.findByTicketId(room.sessaoId);
			if(allTicketsSession.length >= session.capacidade){
				throw new Error('Sessão lotada');
			}

			return await this.ticketRepository.save(room);

		}catch (error){
			throw new Error(error as string);
		}

	}
}// method incomplete