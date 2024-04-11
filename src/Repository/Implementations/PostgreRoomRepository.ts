import { PrismaClient, Prisma, Sala } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ICreateRoom } from '../../DTO/CreateRoomDTO';
import { IRoomRepository } from '../IRoomRepository';
import { prismaClient } from '../../database/prismaClient';


export class PostgreeRoomRepository implements IRoomRepository{
	async findByName(nome: string): Promise<Sala | null> {
		const room =  await(await this.repository()).sala.findFirst({
			where:{nome:{equals:nome}},
			select:{id:true,nome: true, capacidade: true, sessoes: true},
		});
		if(room) return room;
		else return null;
	}
	async findByAll(): Promise<Sala[]> {
		const rooms = await (await this.repository()).sala.findMany({
			select:{id:true,nome: true, capacidade: true, sessoes: true},
		});
		return rooms;	
	}
	async save(sala: ICreateRoom): Promise<Sala> {
		return await (await this.repository()).sala.create({data: sala});
	}
	async findById(id: string): Promise<Sala | null> {
		const room = await (await this.repository()).sala.findUnique({where: {id}});
		if(room) return room;
		else return null;
	}
	async delete(id: string): Promise<Sala> {
		const room = await (await this.repository()).sala.delete({where: {id}});
		return room;
	}
	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}
    
}