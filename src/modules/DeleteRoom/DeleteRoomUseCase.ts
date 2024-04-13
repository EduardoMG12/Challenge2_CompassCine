import { IRoomRepository } from '../../Repository/IRoomRepository';

export class DeleteRoomUseCase{
	constructor(private DeleteRepository: IRoomRepository){}
	async execute(id:string){
		const room = this.DeleteRepository.findById(id);
		if(!room){
			throw new Error('Sala não encontrado');
		}
		await this.DeleteRepository.delete(id);
		return room;
	}
}