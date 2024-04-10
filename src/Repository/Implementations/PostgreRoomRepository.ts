import { PrismaClient, Prisma, Sala } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ICreateRoom } from '../../DTO/CreateRoomDTO';
import { IRoomRepository } from '../IRoomRepository';
import { prismaClient } from '../../database/prismaClient';


export class PostgreeRoomRepository implements IRoomRepository{
	async findByName(nome: string): Promise<Sala | null> {
		try{
			const room = (await this.repository()).sala.findFirst({where: {nome}});
			if(room) return room;
			else return null;
		}
		catch(error){
			throw new Error(error as string);
		}
	}
	async findByAll(): Promise<Sala[]> {
		try{
			const rooms = (await this.repository()).sala.findMany();
			return rooms;
		}
		catch(error){
			throw new Error(error as string);
		}
	}
	async save(sala: ICreateRoom): Promise<Sala> {
		return await (await this.repository()).sala.create({data: sala});
	}
	async findById(id: number): Promise<Sala | null> {
		try{
			const room = (await this.repository()).sala.findUnique({where: {id}});
			if(room) return room;
			else return null;
		}
		catch (error){
			throw new Error(error as string);
		}
	}
	async delete(id: number): Promise<Sala> {
		try{
			const room = (await this.repository()).sala.delete({where: {id: id}});
			return room;
		}
		catch (error){
			throw new Error(error as string);
		}
	}
	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}
    
}