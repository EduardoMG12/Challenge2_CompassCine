import { CreateTicketController } from './CreateTicketController';
import { CreateTicketUseCase } from './CreateTicketUseCase';
import { TicketRepository } from '../../Repository/Implementations/TicketRepository';

export const ticketRepository = new TicketRepository();
export const createTicketUseCase = new CreateTicketUseCase(ticketRepository);
export const createTicketController = new CreateTicketController(createTicketUseCase);