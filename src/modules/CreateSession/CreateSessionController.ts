import { Request, Response } from 'express';
import { CreateSessionUseCase } from './CreateSessionUseCase';



export class CreateSessionController {
	constructor(private createSessionUseCase: CreateSessionUseCase){}
	async handle(request: Request, response: Response){
		const {horario, filmeId, salaId } = request.body;

		try{
			const newSession = await this.createSessionUseCase.execute({horario, filmeId, salaId});
			return response.status(201).json(newSession);
		}catch(error){
			return response.status(400).json('Error to add the new session');
		}
	}
}