/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICreateSessionDTO } from '../../DTO/CreateSessionDTO';
import { ISessionRepository } from './../ISessionRepository';
import { Sessao } from '../../models/sessao';

export class PostgresSessionRepository implements ISessionRepository{
 
	async save(session: ICreateSessionDTO): Promise<any> {
        return await (await this.repository()).create({data: {horario:session.horario, filmeId:session.filmeId, salaId:session.salaId}});
    }


	async findByAll(): Promise<{ id: string; filmeId: string; salaId: string; horario: Date; }[]> {
		const sessions = await (await this.repository()).findMany();
		return sessions;
	}
	async findById(id: string): Promise<{ id: string; filmeId: string; salaId: string; horario: Date; } | null> {
		const session = await (await this.repository()).findUnique({where: {id}});
		return session;
	}
	async delete(id: string): Promise<{ id: string; filmeId: string; salaId: string; horario: Date; }> {
		const session = await (await this.repository()).delete({where:{id}});
		return session; 
	}
	async repository(): Promise<any> {
		return Sessao;
		return Sessao;
	}
}