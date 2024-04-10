import { CreateSessionController } from './CreateSessionController';
import { CreateSessionUseCase } from './CreateSessionUseCase';
import { PostgresSessionRepository } from '../../Repository/Implementations/PostgresSessionRepository';

export const postgreeSessionRepository = new PostgresSessionRepository();
export const createSessionUseCase = new CreateSessionUseCase(postgreeSessionRepository);
export const createSessionController = new CreateSessionController(createSessionUseCase);