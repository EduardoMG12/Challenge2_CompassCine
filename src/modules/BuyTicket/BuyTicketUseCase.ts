import { ICreateTicketDTO } from '../../DTO/CreateTicketDTO';
import { IRoomRepository } from '../../Repository/IRoomRepository';
import { ISessionRepository } from '../../Repository/ISessionRepository';
import { ITicketRepository } from '../../Repository/ITicketRepository';
import { updatesModels } from '../../Repository/References';

export class BuyTicketUseCase{
	private ticketRepository: ITicketRepository;
	private sessionRepository: ISessionRepository;
	private roomRepository: IRoomRepository;
	private referencyRepository: updatesModels

	constructor(ticketRepository: ITicketRepository, sessionRepository: ISessionRepository, roomRepository: IRoomRepository, referenceRepository: updatesModels){
		this.ticketRepository = ticketRepository;
		this.sessionRepository = sessionRepository;
		this.roomRepository = roomRepository;
		this.referencyRepository = referenceRepository
	}
	async execute(ticket: ICreateTicketDTO){
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
			

			

			const ticketSave =  await this.ticketRepository.save(ticket);
			await this.sessionRepository.updateTickets(session.id,ticketSave.id);
			await this.referencyRepository.updateSessaoWithIngresso(session.id,ticketSave.id)
			
			return ticketSave;

		}catch (error){
			throw new Error(error as string);
		}

	}
}