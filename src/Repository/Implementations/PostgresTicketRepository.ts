import { PrismaClient, Prisma, Sessao } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ITicketRepository } from '../ITicketRepository';
import { ICreateTicket } from '../../DTO/CreateTicketDTO';

export class PostgresTicket implements ITicketRepository{
	findById(id: number): Promise<Sessao> {
		throw new Error('Method not implemented.');
	}
	delete(id: number): Promise<Sessao> {
		throw new Error('Method not implemented.');
	}
	findByAll(): Promise<Sessao[]> {
		throw new Error('Method not implemented.');
	}
	repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		throw new Error('Method not implemented.');
	}
	save(sessao: ICreateTicket): Promise<Sessao> {
		throw new Error('Method not implemented.');
	}
}
