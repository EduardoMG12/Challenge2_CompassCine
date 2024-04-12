/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICreateSessionDTO } from '../../DTO/CreateSessionDTO';
import { ITicketRepository } from '../ITicketRepository';
import { Ingresso } from '../../models/ingresso';
import { ICreateTicket } from '../../DTO/CreateTicket';

export class PostgreeTicketRepository implements ITicketRepository{
	async findById(id: string): Promise<any> {
		return  null;
	}
	findByAll(): Promise<any[]> {
		throw new Error('Method not implemented.');
	}
	async save(ticket: ICreateTicket): Promise<any> {
		const objectMovie =  new (await this.repository())(ticket);
		return await objectMovie.save();
	}
	delete(id: string): Promise<any> {
		throw new Error('Method not implemented.');
	}
	async repository(): Promise<any> {
		return Ingresso;
	}
    
}