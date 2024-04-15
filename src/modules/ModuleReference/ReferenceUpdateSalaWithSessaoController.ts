import { Request, Response} from 'express';
import { ReferenceUseCase } from './ReferenceUseCase';


export class ReferenceUpdateSalaWithSessaoController{


	constructor(private referenceUseCase: ReferenceUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { salaId,sessaoId } = request.body;
    
		try {
			const SessionDelete = await this.referenceUseCase.executeupdateSalaWithSessao(salaId, sessaoId); 
			return response.status(200).send(SessionDelete);
		} catch (error) {
			console.log(error);
			return response.status(500).json({ message: 'Erro ao deletar o filme' });
		}
	}
}