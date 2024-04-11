import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { IMovieRepository } from '../IMovieRepository';
import { ICreatMovieDTO } from '../../DTO/CreateMovieDTO';
import { prismaClient } from '../../database/prismaClient';

export class PostgreeMovieRepository implements IMovieRepository{

	async findByName(nome: string): Promise<{ id: string; nome: string; descricao: string; imagemUrl: string; genero: string; atores: string; }> {
		const movieName = await(await this.repository()).filme.findFirst({
			where:{nome:{equals:nome}},
			select:{id:true,nome: true,descricao:true,imagemUrl:true,genero:true,atores: true,},
		});
		if (!movieName) {
			throw new Error('ID não encontrado.');
		}
		return movieName;
	}
	async findByAll(): Promise<{ id: string; nome: string; descricao: string; imagemUrl: string; genero: string; atores: string; }[]> {
		try{
			const movies = (await this.repository()).filme.findMany();
			return movies;
		}
		catch (error){
			throw new Error(error as string);
		}
		
	}
	async save(filme: ICreatMovieDTO): Promise<{ id: string; nome: string; descricao: string; imagemUrl: string; genero: string; atores: string; }> {
		return await (await this.repository()).filme.create({
			data: filme
		});
 
	}
	async findById(id: string): Promise<{ id: string; nome: string; descricao: string; imagemUrl: string; genero: string; atores: string; }> {
		const movie = await (await this.repository()).filme.findFirst({
			where:{id:{equals:id}},
			select:{id:true,nome: true,descricao:true,imagemUrl:true,genero:true,atores: true,},
		});
		if (!movie) {
			throw new Error('ID não encontrado.');
		}
		return movie;
	}
	async delete(id: string): Promise<void> {
		const filmedeletado = await (await this.repository()).filme.deleteMany({
			where:{id:{equals:id}}
		});
	}

	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}

}