import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { IMovieRepository } from '../IMovieRepository';
import { ICreatMovieDTO } from '../../DTO/CreateMovieDTO';
import { prismaClient } from '../../database/prismaClient';

export class PostgreeMovieRepository implements IMovieRepository{

	findByName(nome: string): Promise<{ id: number; nome: string; descricao: string; imagemUrl: string; genero: string; atores: string; }> {
		throw new Error('Method not implemented.');
	}
	findByAll(): Promise<{ id: number; nome: string; descricao: string; imagemUrl: string; genero: string; atores: string; }[]> {
		throw new Error('Method not implemented.');
	}
	async save(filme: ICreatMovieDTO): Promise<{ id: number; nome: string; descricao: string; imagemUrl: string; genero: string; atores: string; }> {
		return await (await this.repository()).filme.create({
			data: filme
		});
 
	}
	findById(id: number): Promise<{ id: number; nome: string; descricao: string; imagemUrl: string; genero: string; atores: string; }> {
		throw new Error('Method not implemented.');
	}
	delete(id: string): Promise<{ id: number; nome: string; descricao: string; imagemUrl: string; genero: string; atores: string; }> {
		throw new Error('Method not implemented.');
	}

	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}

}