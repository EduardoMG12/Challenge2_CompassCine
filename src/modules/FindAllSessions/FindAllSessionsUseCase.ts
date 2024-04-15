import { ISessionRepository } from '../../Repository/ISessionRepository';
import { ITicketRepository } from '../../Repository/ITicketRepository';

export class FindAllSessionsUseCase{
	private sessionsRepository: ISessionRepository;
	private ticketRepository: ITicketRepository
	constructor(sessionsRepository: ISessionRepository, ticketRepository: ITicketRepository){
		this.sessionsRepository = sessionsRepository;
		this.ticketRepository = ticketRepository;
	}
	async execute(){
		const sessionss =  await this.sessionsRepository.findByAll();
		let arrayIngressos = [];
		for(let i = 0; i< sessionss.length;i++){
			for(let j=0;j<sessionss[i].ingressos.length;j++){
				const ticketID = sessionss[i].ingressos[j].toString()
				const responseTicket = await this.ticketRepository.findById(ticketID)
				if(responseTicket){
					arrayIngressos.push(responseTicket)
				}
			}
			sessionss[i].ingressos = arrayIngressos
			arrayIngressos = [];
		}
		return sessionss
	}
}