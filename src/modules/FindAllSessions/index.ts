import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { FindAllSessionsController } from './FindAllSessionsController';
import { FindAllSessionsUseCase } from './FindAllSessionsUseCase';

export const sessionRepository = new SessionRepository();
export const findAllSessionsUseCase = new FindAllSessionsUseCase(sessionRepository);
export const findAllSessionsController = new FindAllSessionsController(findAllSessionsUseCase);