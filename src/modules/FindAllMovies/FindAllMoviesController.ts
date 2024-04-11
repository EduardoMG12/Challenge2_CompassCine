import { Request, Response} from 'express';
import { findAllMovieUseCase } from './FindAllMoviesUseCase';

export class findAllMovieController{
	constructor(private findAllMovieUseCase: findAllMovieUseCase){

	}
	async handle(request:Request,response: Response){
		try {
			const movies = await this.findAllMovieUseCase.execute();
			response.status(200).send(movies);
		} catch (error) {
			console.log(error);
			response.status(500).send({ error: 'Erro interno do servidor' });

		}
	}
}