import { PostgresSessionRepository } from '../../Repository/Implementations/SessionRepository';
import { FindAllSessionsController } from './FindAllSessionsController';
import { FindAllSessionsUseCase } from './FindAllSessionsUseCase';

export const sessionRepository = new PostgresSessionRepository();
export const findAllSessionsUseCase = new FindAllSessionsUseCase(sessionRepository);
export const findAllSessionsController = new FindAllSessionsController(findAllSessionsUseCase);