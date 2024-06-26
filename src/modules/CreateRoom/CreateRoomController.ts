import { Request, Response } from 'express';
import { CreateRoomUseCase } from './CreateRoomUseCase';

export class CreateRoomController {
	constructor(private createRoomUseCase: CreateRoomUseCase){}
	async handle(request: Request, response: Response){
		const {nome, capacidade, lugares } = request.body;

		try{
			const newRoom = await this.createRoomUseCase.execute({nome, capacidade, lugares });
			return response.status(201).json(newRoom);
		}catch(error){
			return response.status(400).json('Erro ao adicionar uma nova sala');
		}
	}
}

