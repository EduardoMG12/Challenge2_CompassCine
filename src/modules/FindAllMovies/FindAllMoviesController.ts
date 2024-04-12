import { Request, Response } from 'express';
import { FindAllUseCase } from './FindAllUseCase';


export class FindAllMoviesController {
	constructor(private findAllUseCase: FindAllUseCase){}
	async handle(request: Request, response: Response){
		try{
			const novoFilme = await this.findAllUseCase.execute();
			return response.status(201).json(novoFilme);
		}catch(error){
			return response.status(400).json('Erro ao adicionar um novo filme');
		}
	}
}

