import { ICreateRoom } from '../../DTO/CreateRoomDTO';
import { IRoomRepository } from '../../Repository/IRoomRepository';



export class CreateRoomUseCase{
	private roomRepository: IRoomRepository;
	constructor(roomRepository: IRoomRepository){
		this.roomRepository = roomRepository;
	}
	async execute(room: ICreateRoom){
		try{
			return await this.roomRepository.save(room);

		}catch (error){
			throw new Error(error as string);
		}

	}
}