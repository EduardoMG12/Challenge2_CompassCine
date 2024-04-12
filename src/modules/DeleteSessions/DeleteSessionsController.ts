import { Request, Response} from 'express';
import { DeleteMovieUseCase } from '../DeleteMovie/DeleteMovieUseCase';
import { DeleteSessionsUseCase } from './DeleteSessionsUseCase';

export class DeleteSessionsController {
	constructor(private deleteSessionsUseCase: DeleteSessionsUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
    
		try {
			const SessionDelete = await this.deleteSessionsUseCase.execute(id); 
			return response.status(200).send(SessionDelete);
		} catch (error) {
			console.log(error);
			return response.status(500).json({ message: 'Erro ao deletar o filme' });
		}
	}
}
