import { Request, Response} from 'express';
import { DeleteSessionsUseCase } from './DeleteSessionsUseCase';

export class DeleteSessionsController {
	constructor(private deleteSessionsUseCase: DeleteSessionsUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
    
		try {
			const deleteSession = await this.deleteSessionsUseCase.execute(id); 
			return response.status(200).send(deleteSession);
		} catch (error) {
			console.log(error);
			return response.status(500).json({ message: 'Erro ao deletar a sala' });
		}
	}
}
