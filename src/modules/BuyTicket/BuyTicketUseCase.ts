import { ICreateTicket } from '../../DTO/CreateTicket';
import { IRoomRepository } from '../../Repository/IRoomRepository';
import { ISessionRepository } from '../../Repository/ISessionRepository';
import { ITicketRepository } from '../../Repository/ITicketRepository';

export class BuyTicketUseCase{
	private ticketRepository: ITicketRepository;
	private sessionRepository: ISessionRepository;
	private roomRepository: IRoomRepository;

	constructor(ticketRepository: ITicketRepository, sessionRepository: ISessionRepository, roomRepository: IRoomRepository){
		this.ticketRepository = ticketRepository;
		this.sessionRepository = sessionRepository;
		this.roomRepository = roomRepository;
	}
	async execute(ticket: ICreateTicket){
		try{
			const session = await this.sessionRepository.findById(ticket.sessaoId);
			if(!session){
				throw new Error('Sessão não encontrada');
			}

			const salaID = await this.roomRepository.findById(session.salaId);
			if(!salaID) throw new Error('Sessão não encontrada');

			

			if(session.ingressos.length == salaID.capacidade) throw new Error('Sessão esgotada');
			for(let i = 0; i< session.ingressos; i++){
				const idIngresso = await this.ticketRepository.findById(session.ingressos[i]);
				if(idIngresso.numeroAssento == ticket.numeroAssento){
					return new Error('Cadeira ja esta ocupada');
				}
			}




			return await this.ticketRepository.save(ticket);

		}catch (error){
			throw new Error(error as string);
		}

	}
}// method incomplete