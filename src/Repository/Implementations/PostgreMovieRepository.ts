/* eslint-disable @typescript-eslint/no-explicit-any */

import { IMovieRepository } from '../IMovieRepository';
import { ICreatMovieDTO } from '../../DTO/CreateMovieDTO';
import { Movie } from '../../models/movies';


export class PostgreeMovieRepository implements IMovieRepository{

	async findByName(nome: string): Promise<any> {
		return await (await this.repository()).find({nome:nome});
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
	async delete(id: string): Promise<any> {
		const filmedeletado = await (await this.repository()).findByIdAndDelete(id);
		return filmedeletado;
	
	}

	async repository(): Promise<any> {
		return Movie;
	}

}