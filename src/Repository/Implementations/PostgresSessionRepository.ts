/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICreateSessionDTO } from '../../DTO/CreateSessionDTO';
import { ISessionRepository } from './../ISessionRepository';
import { sala }


export class PostgresSessionRepository implements ISessionRepository{
	async save(session: ICreateSessionDTO): Promise<any> {
		
	} // I Don't Know implement this controller
	async findByAll(): Promise<{ id: string; filmeId: string; salaId: string; horario: Date; }[]> {
		const sessions = await (await this.repository()).sessao.findMany();
		return sessions;
	}
	async findById(id: string): Promise<{ id: string; filmeId: string; salaId: string; horario: Date; } | null> {
		const session = await (await this.repository()).sessao.findUnique({where: {id}});
		return session;
	}
	async delete(id: string): Promise<{ id: string; filmeId: string; salaId: string; horario: Date; }> {
		const session = await (await this.repository()).sessao.delete({where:{id}});
		return session; 
	}
	async repository(): Promise<any> {
		return await prismaClient;
	}
}