import { Request, Response } from 'express';
import { FindAllTicketUseCase } from './FindAllTicketUseCase';

export class FindAllTicketController{
	constructor(private findAllTicketUsecase:FindAllTicketUseCase){}
	async handle(req:Request,res:Response){
		
		try {
			const tickets = await this.findAllTicketUsecase.execute();
			res.status(200).send(tickets);
		} catch (error) {
			console.log(error);
		}
	}
}