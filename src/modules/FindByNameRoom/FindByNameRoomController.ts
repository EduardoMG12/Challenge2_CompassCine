import { Request, Response } from 'express';
import { FindByNameRoomUseCase } from './FindByNameRoomUseCase';

export class FindByNameRoomController{
	constructor(private findByNameRoomController: FindByNameRoomUseCase){}
	async handle(req:Request,res:Response){
		
		try {
			const room = await this.findByNameRoomController.execute(req.params.nome);
			res.status(200).send(room);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Erro interno do servidor' });
		}
	}
}