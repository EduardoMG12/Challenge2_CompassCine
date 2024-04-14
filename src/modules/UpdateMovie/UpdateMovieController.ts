import { Request, Response } from 'express';
import { UpdateMovieUseCase } from './UpdateMovieUseCase';

export class UpdateMovieController{
	constructor(private updateMovieuseCase:UpdateMovieUseCase){}
	async handle(req:Request,res:Response){
		try {
			const movie = await this.updateMovieuseCase.execute(req.params.id,req.body.movie);
			res.status(200).send(movie);
		} catch (error) {
			console.log(error);
		}
	}
}