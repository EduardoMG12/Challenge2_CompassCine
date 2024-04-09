import { PostgresSessionRepository } from '../../Repository/Implementations/PostgresSessionRepository';
import { CreateSessionUseCase } from './CreateSessionUseCase';
import { CreateSessionController } from './CreateSessionController';

export const postgresSessionRepository = new PostgresSessionRepository();
export const createSessionUseCase = new CreateSessionUseCase(postgresSessionRepository);
export const createRoomController = new CreateSessionController(createSessionUseCase);