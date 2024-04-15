import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { FindByIdSessionController } from './FindByIdSessionController';
import { FindByIdSessionUsecase } from './FindByIdSessionUseCase';

export const sessionRepository = new SessionRepository();
export const findByIdSessionUseCase = new FindByIdSessionUsecase(sessionRepository);
export const findByIdSessionController = new FindByIdSessionController(findByIdSessionUseCase);