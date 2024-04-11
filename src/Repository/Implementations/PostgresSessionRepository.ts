import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ICreateSessionDTO } from '../../DTO/CreateSessionDTO';
import { ISessionRepository } from './../ISessionRepository';
import { prismaClient } from '../../database/prismaClient';

export class PostgresSessionRepository implements ISessionRepository{
	async save(session: ICreateSessionDTO): Promise<Sessao> {
        return await (await this.repository()).sessao.create({data: {horario:session.horario, filmeId:session.filmeId, salaId:session.salaId}});
    }

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
	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}
}