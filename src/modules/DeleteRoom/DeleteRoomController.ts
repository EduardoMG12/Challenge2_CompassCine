import { Request, Response } from 'express';
import { DeleteRoomUseCase } from './DeleteRoomUseCase';

export class DeleteRoomController{
	constructor(private DeleteRoomUseCase: DeleteRoomUseCase){}
	async handle(req: Request,res: Response) : Promise<Response> {
		try {
			const deleteRoom = this.DeleteRoomUseCase.execute(req.params.id);
			return res.status(200).send(deleteRoom);
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: 'Erro ao deletar a sala' });
		}
	}
}