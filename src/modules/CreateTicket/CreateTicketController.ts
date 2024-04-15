import { CreateTicketUseCase } from './CreateTicketUseCase';
import { Request, Response } from 'express';

export class CreateTicketController{

	constructor(private createTicketUseCase: CreateTicketUseCase){}
	async handle(request: Request, response: Response){
		const {sessaoId, numeroAssento } = request.body;

		try{
			const newMovie = await this.createTicketUseCase.execute({sessaoId, numeroAssento});
			return response.status(201).json(newMovie);
		}catch(error){
			return response.status(400).json('Erro ao adicionar um novo tickets');
		}


	}   
}