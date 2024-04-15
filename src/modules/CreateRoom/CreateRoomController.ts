import { Request, Response } from 'express';
import { CreateRoomUseCase } from './CreateRoomUseCase';



export class CreateRoomController {
	constructor(private createRoomUseCase: CreateRoomUseCase){}
	async handle(request: Request, response: Response){
		const {nome, capacidade, lugares } = request.body;

		try{
			const novaSala = await this.createRoomUseCase.execute({nome, capacidade, lugares });
			return response.status(201).json(novaSala);
		}catch(error){
			return response.status(400).json('Erro ao adicionar um novo filme');
		}
	}
}

