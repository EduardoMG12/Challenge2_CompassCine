import { ICreateTicketDTO } from '../../DTO/CreateTicketDTO';
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
	async execute(ticket: ICreateTicketDTO){
		try{
			
			const session = await this.sessionRepository.findById(ticket.sessaoId);
			if(!session){
				throw new Error('Sessão não encontrada');
			}
			console.log(session);
			const salaID = await this.roomRepository.findById(session.salaId);
			if(!salaID) throw new Error('Sessão não encontrada');

			console.log(salaID);

			if(session.ingressos.length == salaID.capacidade) throw new Error('Sessão esgotada');
			
			for(let i = 0; i< session.ingressos; i++){
				const idIngresso = await this.ticketRepository.findById(session.ingressos[i]);
				console.log(idIngresso.numeroAssento);
				console.log(ticket.numeroAssento);
				console.log('Dsdsad');
				if(idIngresso.numeroAssento == ticket.numeroAssento){
					return new Error('Cadeira ja esta ocupada');
				}
			}
			

			

			const ticketSave =  await this.ticketRepository.save(ticket);
			await this.sessionRepository.updateTickets(session.id,ticketSave.id);
			return ticketSave;

		}catch (error){
			throw new Error(error as string);
		}

	}
}