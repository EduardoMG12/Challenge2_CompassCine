import { Request, Response } from 'express';
import { FindByIdRoomuseCase } from './FindByIdRoomUseCase';

export class FindByIdRoomController{
	constructor(private findByIdUseCase: FindByIdRoomuseCase){}
	async handle(req: Request,res: Response){
		try {
			const room = await this.findByIdUseCase.execute(req.params.id);
			res.status(200).send(room);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Erro interno do servidor' });
		}
	}
}