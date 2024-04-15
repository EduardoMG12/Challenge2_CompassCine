import { Request, Response} from 'express';
import { ReferenceUseCase } from './ReferenceUseCase';


export class ReferenceUpdateFilmeWithSessaoController{


	constructor(private referenceUseCase: ReferenceUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { idFilme,idsessao } = request.body;
    
		try {
			const SessionDelete = await this.referenceUseCase.executeUpdateFilmeWithSessao(idFilme, idsessao); 
			return response.status(200).send(SessionDelete);
		} catch (error) {
			console.log(error);
			return response.status(500).json({ message: 'Erro ao deletar o filme' });
		}
	}
}