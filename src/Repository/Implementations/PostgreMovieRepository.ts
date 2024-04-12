/* eslint-disable @typescript-eslint/no-explicit-any */

import { IMovieRepository } from '../IMovieRepository';
import { ICreatMovieDTO } from '../../DTO/CreateMovieDTO';
import { Movie } from '../../models/movies';


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
	async findByAll(): Promise<any> {
		return await (await this.repository()).find();
		
	}
	async save(filme: ICreatMovieDTO): Promise<any> {
		const objectMovie =  new (await this.repository())(filme);
		return await objectMovie.save();
	}
	async findById(id: string): Promise<any> {
		try{
			const movie = await (await this.repository()).findById(id);
			return movie;
			
		}catch(e){
			return null;
		}
	}
	async delete(id: string): Promise<void> {
		const filmedeletado = await (await this.repository()).findByIdAndDelete(id);
		return filmedeletado;
	}

	async repository(): Promise<any> {
		return Movie;
	}

}