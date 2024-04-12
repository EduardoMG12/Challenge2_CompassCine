import { Request, Response} from 'express';
import { FindAllRoomsUseCase } from './FindAllRoomsUseCase';

export class FindAllRoomsController{
	constructor(private findAllRoomUseCase: FindAllRoomsUseCase){}
	async handle(req: Request,res: Response){
		try {
			const rooms = await this.findAllRoomUseCase.execute();
			res.status(200).send(rooms);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Erro interno do servidor' });
		}
	}
}