import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { CreateSessionController } from './CreateSessionController';
import { CreateSessionUseCase } from './CreateSessionUseCase';

export const sessionRepository = new SessionRepository();
export const createSessionUseCase = new CreateSessionUseCase(sessionRepository);
export const createSessionController = new CreateSessionController(createSessionUseCase);