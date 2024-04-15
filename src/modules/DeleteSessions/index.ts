import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { DeleteSessionsController } from './DeleteSessionsController';
import { DeleteSessionsUseCase } from './DeleteSessionsUseCase';

export const sessionRepository = new SessionRepository();
export const deleteSessionsUseCase = new DeleteSessionsUseCase(sessionRepository);
export const deleteSessionsController = new DeleteSessionsController(deleteSessionsUseCase);
