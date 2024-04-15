import { Request, Response } from 'express';
import { FindByIdMovieUsecase } from './FindByIdMovieUseCase';

export class FindByIdMovieController{
	constructor(private FindByIdUseCase: FindByIdMovieUsecase){}
	async handle(req:Request,res:Response){
		
		try {
			const movie = await this.FindByIdUseCase.execute(req.params.id);
			res.status(200).send(movie);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Erro interno do servidor' });
		}
	}
}