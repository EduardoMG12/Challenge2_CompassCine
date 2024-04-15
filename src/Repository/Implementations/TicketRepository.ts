/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITicketRepository } from '../ITicketRepository';
import { Ingresso } from '../../models/ingresso';
import { ICreateTicketDTO } from '../../DTO/CreateTicketDTO';

export class PostgreeTicketRepository implements ITicketRepository{
	async findByTicketId(id: string): Promise<any> {
		const tickets = await (await this.repository()).findById(id);
		return tickets;
	}
	async findById(id: string): Promise<any> {
		const ticket = await (await this.repository()).findById(id);
		return ticket;	
	}
	async findByAll(): Promise<any[]> {
		const tickets = await (await this.repository()).find();
		return tickets;

	}
	async save(ticket: ICreateTicketDTO): Promise<any> {
		const objectMovie =  await (await this.repository())(ticket);
		return await objectMovie.save();
	}
	async delete(id: string): Promise<any> {
		const ticket = await (await this.repository()).delete({where:{id}});
		return ticket; 
	}
	async repository(): Promise<any> {
		return Ingresso;
	}
    
}