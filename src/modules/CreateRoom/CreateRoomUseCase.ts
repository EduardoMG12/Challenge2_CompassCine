import { ICreateRoomDTO } from '../../DTO/CreateRoomDTO';
import { IRoomRepository } from '../../Repository/IRoomRepository';
import { placeGenerator } from '../../help/placeGenerator';

export class CreateRoomUseCase{
	private roomRepository: IRoomRepository;
	constructor(roomRepository: IRoomRepository){
		this.roomRepository = roomRepository;
	}
	async execute(room: ICreateRoomDTO){
		try{
			const lugaresSala = (placeGenerator(room.capacidade));
			room.lugares = lugaresSala;
			return await this.roomRepository.save(room);

		}catch (error){
			throw new Error(error as string);
		}

	}
}