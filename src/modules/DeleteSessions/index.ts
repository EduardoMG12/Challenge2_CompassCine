import { PostgresSessionRepository } from '../../Repository/Implementations/PostgresSessionRepository';
import { DeleteSessionsController } from './DeleteSessionsController';
import { DeleteSessionsUseCase } from './DeleteSessionsUseCase';

export const SessionRepository = new PostgresSessionRepository();
export const deleteSessionsUseCase = new DeleteSessionsUseCase(SessionRepository);
export const deleteSessionsController = new DeleteSessionsController(deleteSessionsUseCase);
