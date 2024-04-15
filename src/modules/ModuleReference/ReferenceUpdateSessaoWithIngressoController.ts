import { Request, Response} from 'express';
import { ReferenceUseCase } from './ReferenceUseCase';


export class ReferenceUpdateSessaoWithIngressoController{


	constructor(private referenceUseCase: ReferenceUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { sessaoId,ingressoId } = request.body;
    
		try {
			const SessionDelete = await this.referenceUseCase.executeUpdateSessaoWithIngresso(sessaoId, ingressoId); 
			return response.status(200).send(SessionDelete);
		} catch (error) {
			console.log(error);
			return response.status(500).json({ message: 'Erro ao deletar o filme' });
		}
	}
}