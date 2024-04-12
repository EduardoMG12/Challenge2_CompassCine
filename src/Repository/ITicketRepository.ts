/* eslint-disable @typescript-eslint/no-explicit-any */


import { ICreateTicket } from '../DTO/CreateTicket';

export interface ITicketRepository{
	findById(id: string): Promise<any>
	findByAll(): Promise<any[]>
	findBySessionId(sessionId:string): Promise<any[]>
	save(ticket: ICreateTicket): Promise<any>
	delete(id:string): Promise<any>
	repository(): Promise<any>
}