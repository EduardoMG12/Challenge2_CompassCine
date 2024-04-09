import { PrismaClient, Prisma, Sessao } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ISessionRepository } from '../ISessionRepository';
import { ICreateSession } from '../../DTO/CreateSessionDTO';
import { prismaClient } from '../../database/prismaClient';

export class PostgresSessionRepository implements ISessionRepository{
	async findById(id: number): Promise<Sessao | null> {
		try{
			const session = (await this.repository()).sessao.findUnique({where: {id: id}});
			if(session) return session;
			else return null;
		}
		catch (error){
			throw new Error(error as string);
		}
	}
	async delete(id: number): Promise<Sessao> {
		try{
			const session = (await this.repository()).sessao.delete({where: {id: id}});
			return session;
		}
		catch (error){
			throw new Error(error as string);
		}
	}
	async findByAll(): Promise<Sessao[]> {
		try{
			const sessions = (await this.repository()).sessao.findMany();
			return sessions;
		}
		catch(error){
			throw new Error(error as string);
		}

	}
	async save(sessao: ICreateSession): Promise<Sessao> {
		try {
			const createdSession = await (await this.repository()).sessao.create({data: sessao,});
			return createdSession;
		} 
		catch (error) {
			throw new Error(error as string);		
		}
	}
	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}
}