import { PrismaClient, Sessao } from '@prisma/client';
import { ICreateTicket } from '../DTO/CreateTicketDTO';


export interface ITicketRepository{
    findByAll(): Promise<Sessao[]>
    save(sessao: ICreateTicket): Promise<Sessao>;
    findById(id: number): Promise<Sessao>;
    delete(id: number): Promise<Sessao>;
    repository(): Promise<PrismaClient>
}

// remember revise code, but i think is done