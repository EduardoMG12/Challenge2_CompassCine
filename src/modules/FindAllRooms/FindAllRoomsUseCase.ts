import { IRoomRepository } from '../../Repository/IRoomRepository';
import { ISessionRepository } from '../../Repository/ISessionRepository';
import { ITicketRepository } from '../../Repository/ITicketRepository';

export class FindAllRoomsUseCase{
	private roomRepository: IRoomRepository;
	private sessaoReposytory: ISessionRepository;
	private ticketsRepository: ITicketRepository
	constructor(roomRepository: IRoomRepository, sessaoRepository: ISessionRepository, ticketsRepository: ITicketRepository){
		this.roomRepository = roomRepository;
		this.sessaoReposytory = sessaoRepository;
		this.ticketsRepository = ticketsRepository;
	}
	async execute(){
		let novoArrayObjeto = [];
		let sessoesRoom = []
		const rooms =  await this.roomRepository.findByAll();

		for (let i = 0;  i < rooms.length; i++){
			for (let h = 0; h < rooms[i].sessoes.length; h++){
				const idSessao = (rooms[i].sessoes[h].toString());
				const sess = (await this.sessaoReposytory.findById(idSessao));
				novoArrayObjeto.push(sess);
			}
			rooms[i].sessoes = novoArrayObjeto;
			novoArrayObjeto = [];
		}
	
		for (let i = 0; i < rooms.length; i++) {
			console.log(rooms[i].sessoes.length)
			for (let h = 0; h < rooms[i].sessoes.length; h++) {
				console.log("passou")
				for (let j = 0; j < rooms[i].sessoes[h].ingressos.length; j++) {
					const Ingressoss = await this.ticketsRepository.findById(rooms[i].sessoes[h].ingressos[j]);
					if(Ingressoss){
						sessoesRoom.push(Ingressoss)
					}
				}
				rooms[i].sessoes[h].ingressos = sessoesRoom
			}	

		}

		return rooms;

	}
}