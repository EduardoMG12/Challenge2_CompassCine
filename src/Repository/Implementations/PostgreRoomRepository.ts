/* eslint-disable @typescript-eslint/no-explicit-any */


import { ICreateRoom } from '../../DTO/CreateRoomDTO';
import { Sala } from '../../models/sala';
import { IRoomRepository } from '../IRoomRepository';



export class PostgreeRoomRepository implements IRoomRepository{
	async findByName(nome: string): Promise<any> {
		return await (await this.repository()).find({nome:nome});
	}
	async findByAll(): Promise<any> {
		return await (await this.repository()).find();
	}
	async save(sala: ICreateRoom): Promise<any> {
		const objectMovie =  new (await this.repository())(sala);
		return await objectMovie.save();
	}
	async findById(id: string): Promise<any | null> {
		const room = await (await this.repository()).findById(id);
		if(room) return room;
		else return null;
	}
	async delete(id: string): Promise<any> {
		const room = await (await this.repository()).findByIdAndDelete(id);
		return room;
	}
	async repository(): Promise<any> {
		return Sala;
	}
    
}