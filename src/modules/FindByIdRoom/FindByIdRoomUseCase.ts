import { IRoomRepository } from '../../Repository/IRoomRepository';

export class FindByIdRoomuseCase{
	private roomRepository: IRoomRepository;
	constructor(roomRepository: IRoomRepository){
		this.roomRepository = roomRepository;
	}
	async execute(id:string){
		return await this.roomRepository.findById(id);
	}
}