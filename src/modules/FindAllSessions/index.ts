import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { TicketRepository } from '../../Repository/Implementations/TicketRepository';
import { FindAllSessionsController } from './FindAllSessionsController';
import { FindAllSessionsUseCase } from './FindAllSessionsUseCase';

export const ticketRepository = new TicketRepository();
export const sessionRepository = new SessionRepository();
export const findAllSessionsUseCase = new FindAllSessionsUseCase(sessionRepository,ticketRepository);
export const findAllSessionsController = new FindAllSessionsController(findAllSessionsUseCase);