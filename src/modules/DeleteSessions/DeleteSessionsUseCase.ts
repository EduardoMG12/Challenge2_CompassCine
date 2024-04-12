/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISessionRepository } from '../../Repository/ISessionRepository';
export class DeleteSessionsUseCase {
	constructor(private SessionRepository: ISessionRepository) {}

	async execute(id: string): Promise<any> {
		const existingSessions = await this.SessionRepository.findById(id);
		if (!existingSessions) {
			throw new Error('Sessao não encontrado');
		}

		await this.SessionRepository.delete(id.toString());
		return existingSessions;
	}
}