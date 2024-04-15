import { Request, Response } from 'express';
import { CreateSessionUseCase } from './CreateSessionUseCase';


export class CreateSessionController {
	constructor(private createSessionUseCase: CreateSessionUseCase){}
	async handle(request: Request, response: Response){
		const {horarioInicio,horaFim, filmeId, salaId } = request.body;

		try{
			const newSession = await this.createSessionUseCase.execute({horarioInicio, horaFim,filmeId, salaId });
			return response.status(201).json(newSession);
		}catch(error){
			return response.status(400).json('Erro ao adicionar um novo filme');
		}
	}
}

