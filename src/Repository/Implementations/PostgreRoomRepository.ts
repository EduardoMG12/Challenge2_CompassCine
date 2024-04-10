import { PrismaClient, Prisma, Sala } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ICreateRoom } from '../../DTO/CreateRoomDTO';
import { IRoomRepository } from '../IRoomRepository';
import { prismaClient } from '../../database/prismaClient';


export class PostgreeRoomRepository implements IRoomRepository{
	async findByName(nome: string): Promise<Sala | null> {
		const room = await (await this.repository()).sala.findFirst({where: {nome}});
		if(room) return room;
		else return null;
	}
	async findByAll(): Promise<Sala[]> {
		const rooms = await (await this.repository()).sala.findMany();
		return rooms;	
	}
	async save(sala: ICreateRoom): Promise<Sala> {
		return await (await this.repository()).sala.create({data: sala});
	}
	async findById(id: number): Promise<Sala | null> {
		const room = await (await this.repository()).sala.findUnique({where: {id}});
		if(room) return room;
		else return null;
	}
	async delete(id: number): Promise<Sala> {
		const room = await (await this.repository()).sala.delete({where: {id: id}});
		return room;
	}
	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}
    
}