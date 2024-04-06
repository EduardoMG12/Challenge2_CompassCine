import { Request, Response } from 'express';
import { CreateMovieUseCase } from './CreateMovieUseCase';


export class CreateMovieController {
	constructor(private createMovieUseCase: CreateMovieUseCase){}
	async handle(request: Request, response: Response){
		const {nome, descricao, imagemUrl, genero, atores } = request.body;

		try{
			const novoFilme = await this.createMovieUseCase.execute({nome, descricao, imagemUrl, genero, atores});
			return response.status(201).json(novoFilme);
		}catch(error){
			return response.status(400).json('Erro ao adicionar um novo filme');
		}
	}
}

