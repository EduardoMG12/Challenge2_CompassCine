/* eslint-disable @typescript-eslint/no-explicit-any */


import { ICreateTicketDTO } from '../DTO/CreateTicketDTO';

export interface ITicketRepository{
	findById(id: string): Promise<any>
	findByAll(): Promise<any[]>
	findByTicketId(id:string): Promise<any>
	save(ticket: ICreateTicketDTO): Promise<any>
	delete(id:string): Promise<any>
	repository(): Promise<any>
}