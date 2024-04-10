import { Request, Response} from 'express';
import { DeleteMovieUseCase } from '../DeleteMovie/DeleteMovieUseCase';

export class DeleteMovieController {
	constructor(private deleteMovieUseCase: DeleteMovieUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
    
		try {
			await this.deleteMovieUseCase.execute(id); 
			return response.status(200).send();
		} catch (error) {
			console.log(error);
			return response.status(500).json({ message: 'Erro ao deletar o filme' });
		}
	}
}
