/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITicketRepository } from '../ITicketRepository';
import { Ingresso } from '../../models/ingresso';
import { ICreateTicket } from '../../DTO/CreateTicket';

export class PostgreeTicketRepository implements ITicketRepository{
	async findById(id: string): Promise<any> {
		const ticket = await (await this.repository()).findUnique({where: {id}});
		return ticket;	}
	async findByAll(): Promise<any[]> {
		const tickets = await (await this.repository()).findMany();
		return tickets;

	}
	async save(ticket: ICreateTicket): Promise<any> {
		const objectMovie =  new (await this.repository())(ticket);
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