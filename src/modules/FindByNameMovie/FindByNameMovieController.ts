import { Request, Response } from 'express';
import { findByNameMovieUserCase } from './FindByNameMovieUserCase';
export class findByNameMovieController{
	constructor( private findByNameMovieUseCase: findByNameMovieUserCase){}
	async handle(req: Request,res:Response){
		try {
			const movie = await this.findByNameMovieUseCase.execute(req.params.name);
			res.status(200).send(movie);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Erro interno do servidor' });
		}
	}
}