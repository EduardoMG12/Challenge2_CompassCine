import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ICreateRoom } from '../../DTO/CreateRoomDTO';
import { IRoomRepository } from '../IRoomRepository';
import { prismaClient } from '../../database/prismaClient';


export class PostgreeRoomRepository implements IRoomRepository{
	findByName(nome: string): Promise<{ id: number; nome: string; capacidade: number; }> {
		throw new Error('Method not implemented.');
	}
	findByAll(): Promise<{ id: number; nome: string; capacidade: number; }[]> {
		throw new Error('Method not implemented.');
	}
	async save(sala: ICreateRoom): Promise<{ id: number; nome: string; capacidade: number; }> {
		return await (await this.repository()).sala.create({
			data: sala
		});
	}
	findById(id: number): Promise<{ id: number; nome: string; capacidade: number; }> {
		throw new Error('Method not implemented.');
	}
	delete(id: string): Promise<{ id: number; nome: string; capacidade: number; }> {
		throw new Error('Method not implemented.');
	}
	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}
    
}