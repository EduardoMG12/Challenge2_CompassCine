import { ICreateRoom } from '../../DTO/CreateRoomDTO';
import { IRoomRepository } from '../../Repository/IRoomRepository';



export class CreateRoomUseCase{
	private roomRepository: IRoomRepository;
	constructor(roomRepository: IRoomRepository){
		this.roomRepository = roomRepository;
	}
	async execute(room: ICreateRoom){
		return this.roomRepository.save(room);

	}
}