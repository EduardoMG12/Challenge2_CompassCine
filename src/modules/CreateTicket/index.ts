import { CreateTicketController } from './CreateTicketController';
import { CreateTicketUseCase } from './CreateTicketUseCase';
import { PostgreeTicketRepository } from '../../Repository/Implementations/TicketRepository';

export const postgreeTicketRepository = new PostgreeTicketRepository();
export const createTicketUseCase = new CreateTicketUseCase(postgreeTicketRepository);
export const createTicketController = new CreateTicketController(createTicketUseCase);