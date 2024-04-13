import { IRoomRepository } from '../../Repository/IRoomRepository';

export class FindByNameRoomUseCase{
	private roomRepository:IRoomRepository;
	constructor(roomRepository:IRoomRepository){
		this.roomRepository = roomRepository;
	}
	async execute(nome:string){
		return await this.roomRepository.findByName(nome);
	}
}