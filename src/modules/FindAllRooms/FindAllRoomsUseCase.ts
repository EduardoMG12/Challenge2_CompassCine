import { IRoomRepository } from '../../Repository/IRoomRepository';

export class FindAllRoomsUseCase{
	private roomRepository: IRoomRepository;
	constructor(roomRepository: IRoomRepository){
		this.roomRepository = roomRepository;
	}
	async execute(){
		return await this.roomRepository.findByAll();
	}
}