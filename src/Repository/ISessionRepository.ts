import { PrismaClient, Sessao } from '@prisma/client';
import { ICreateSessionDTO } from '../DTO/CreateSessionDTO';

export interface ISessionRepository{
	findById(id: string): Promise<Sessao | null>
	findByAll(): Promise<Sessao[]>
	save(session: ICreateSessionDTO): Promise<Sessao>
	delete(id:string): Promise<Sessao>
	repository(): Promise<PrismaClient>
}