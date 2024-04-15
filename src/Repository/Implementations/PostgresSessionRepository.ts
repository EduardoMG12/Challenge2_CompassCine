/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICreateSessionDTO } from '../../DTO/CreateSessionDTO';
import { ISessionRepository } from './../ISessionRepository';
import { Sessao } from '../../models/sessao';

export class PostgresSessionRepository implements ISessionRepository{
	async updateTickets(id: string, idTicket: string): Promise<any> {
		const sessiom = await (await this.repository()).findById(id);
		sessiom.ingressos.push(idTicket);
		return await sessiom.save();
	}
 
	async save(session: ICreateSessionDTO): Promise<any> {
		try{
			
			const newSession = new (await this.repository())(session);
			console.log(newSession);
			return await newSession.save();
		}catch(e){
			console.log(e);
		}
	}
	async findByAll(): Promise<{ id: string; filmeId: string; salaId: string; horario: Date; }[]> {
		const sessions = await (await this.repository()).find();
		return sessions;
	}
	async findById(id: string): Promise<{ id: string; filmeId: string; salaId: string; horario: Date; } | null> {
		try{
			const sessaooo = await (await this.repository()).findById(id);
			return sessaooo;
			
		}catch(e){
			return null;
		}
	}
	async delete(id: string): Promise<{ id: string; filmeId: string; salaId: string; horario: Date; }> {
		const Sessaodeletado = await (await this.repository()).findByIdAndDelete(id);
		return Sessaodeletado;
	}
	async repository(): Promise<any> {
		return Sessao;

	}
}