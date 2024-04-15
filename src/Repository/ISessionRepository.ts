/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICreateSessionDTO } from '../DTO/CreateSessionDTO';

export interface ISessionRepository{
	findById(id: string): Promise<any>
	findByAll(): Promise<any[]>
	save(session: ICreateSessionDTO): Promise<any>
	delete(id:string): Promise<any>
	updateTickets(id: string, idTicket: string): Promise<any>
	repository(): Promise<any>
}