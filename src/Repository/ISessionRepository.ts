import { PrismaClient, Sessao } from '@prisma/client';
import { ICreateSession } from '../DTO/CreateSessionDTO';


export interface ISessionRepository{
    findByAll(): Promise<Sessao[]>
    save(sessao: ICreateSession): Promise<Sessao>;
    findById(id: number): Promise<Sessao | null>;
    delete(id: number): Promise<Sessao>;
    repository(): Promise<PrismaClient>
}