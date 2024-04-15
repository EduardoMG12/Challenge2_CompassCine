import { PostgresSessionRepository } from '../../Repository/Implementations/SessionRepository';
import { DeleteSessionsController } from './DeleteSessionsController';
import { DeleteSessionsUseCase } from './DeleteSessionsUseCase';

export const SessionRepository = new PostgresSessionRepository();
export const deleteSessionsUseCase = new DeleteSessionsUseCase(SessionRepository);
export const deleteSessionsController = new DeleteSessionsController(deleteSessionsUseCase);
