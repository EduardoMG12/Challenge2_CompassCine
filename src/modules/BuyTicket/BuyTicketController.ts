import { Request, Response } from 'express';
import { BuyTicketUseCase } from './BuyTicketUseCase';
import { ICreateTicketDTO } from '../../DTO/CreateTicketDTO';



export class BuyTicketController {
	constructor(private buyTicketUseCase: BuyTicketUseCase){}
	async handle(request: Request, response: Response){
		const data:ICreateTicketDTO  = request.body;
		try{
			const newSession = await this.buyTicketUseCase.execute(data);
			console.log(newSession);
			return response.status(201).json(newSession);
		}catch(error){
			return response.status(400).json('Cadeira ja esta ocupada');
		}
	}
}

