import { PostgresSessionRepository } from '../../Repository/Implementations/SessionRepository';
import { CreateSessionController } from './CreateSessionController';
import { CreateSessionUseCase } from './CreateSessionUseCase';

export const postgresSessionRepository = new PostgresSessionRepository();
export const createSessionUseCase = new CreateSessionUseCase(postgresSessionRepository);
export const createSessionController = new CreateSessionController(createSessionUseCase);