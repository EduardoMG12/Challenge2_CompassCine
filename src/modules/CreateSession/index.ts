import { PostgresSessionRepository } from '../../Repository/Implementations/PostgresSessionRepository';
import { CreateSessionController } from './CreateSessionController';
import { CreateSessionUseCase } from './CreateSessionUseCase';

// } I Don't Know implement this controllertations/PostgresSessionRepository';

export const postgresSessionRepository = new PostgresSessionRepository();
export const createSessionUseCase = new CreateSessionUseCase(postgresSessionRepository);
export const createSessionController = new CreateSessionController(createSessionUseCase);