import { Request, Response } from 'express';
import { FindByIdTicketuseCase } from './FindByIdTicketUseCase';

export class FindByIdTicketController{
	constructor(private findByIdTicketusaCase: FindByIdTicketuseCase){}
	async handle(req:Request,res:Response){
		try {
			const ticket = await this.findByIdTicketusaCase.execute(req.params.id);
			res.status(200).send(ticket);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Erro interno do servidor' });
		}
	}
}