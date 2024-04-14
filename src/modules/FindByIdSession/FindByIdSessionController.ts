import { Request, Response } from 'express';
import { FindByIdSessionUsecase } from './FindByIdSessionUseCase';

export class FindByIdSessionController{
	constructor(private FindByIdSessionUsecase:FindByIdSessionUsecase){}
	async handle(req:Request,res:Response){
		try {
			const session = await this.FindByIdSessionUsecase.execute(req.params.id);
			return res.status(200).send(session);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Erro interno do servidor' });
		}
	}
}