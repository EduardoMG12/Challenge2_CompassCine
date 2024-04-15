import { IRoomRepository } from '../../Repository/IRoomRepository';
import { ISessionRepository } from '../../Repository/ISessionRepository';

export class FindAllRoomsUseCase{
	private roomRepository: IRoomRepository;
	private sessaoReposytory: ISessionRepository;
	constructor(roomRepository: IRoomRepository, sessaoRepository: ISessionRepository){
		this.roomRepository = roomRepository;
		this.sessaoReposytory = sessaoRepository;
	}
	async execute(){
		let novoArrayObjeto = [];
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
		

		return rooms;

	}
}