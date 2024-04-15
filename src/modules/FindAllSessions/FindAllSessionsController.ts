import { Request, Response} from 'express';
import { FindAllSessionsUseCase } from './FindAllSessionsUseCase';

export class FindAllSessionsController{
	constructor(private findAllSessionsUseCase: FindAllSessionsUseCase){}
	async handle(req: Request,res: Response){
		try {
			const sessions = await this.findAllSessionsUseCase.execute();
			res.status(200).send(sessions);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Erro interno do servidor' });
		}
	}
}